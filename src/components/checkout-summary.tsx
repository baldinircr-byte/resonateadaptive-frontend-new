"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  RESONATE_CHECKOUT_STORAGE_KEY,
  RESONATE_PRODUCT,
} from "@/lib/resonate-checkout";

type CheckoutState = {
  quantity: number;
};

const defaultState: CheckoutState = {
  quantity: 1,
};

function loadInitialState(): CheckoutState {
  if (typeof window === "undefined") {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(RESONATE_CHECKOUT_STORAGE_KEY);
    if (!raw) {
      return defaultState;
    }
    const parsed = JSON.parse(raw) as CheckoutState;
    if (typeof parsed.quantity === "number") {
      return { quantity: Math.min(5, Math.max(1, parsed.quantity)) };
    }
  } catch {
    // ignore storage parse issues
  }

  return defaultState;
}

export function CheckoutSummary() {
  const [state, setState] = useState<CheckoutState>(loadInitialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.localStorage.setItem(RESONATE_CHECKOUT_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const totalLabel = useMemo(() => {
    return ((RESONATE_PRODUCT.unitPriceCents * state.quantity) / 100).toLocaleString("en-CA", {
      style: "currency",
      currency: RESONATE_PRODUCT.currency,
    });
  }, [state.quantity]);

  function adjustQuantity(next: number) {
    setState({ quantity: Math.min(5, Math.max(1, next)) });
  }

  async function handleContinue() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: state.quantity }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        setError(data.error ?? "Checkout is not configured yet.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Unable to start checkout right now.");
      setLoading(false);
    }
  }

  return (
    <div className="checkoutLayout">
      <div className="checkoutSummaryCard">
        <p className="eyebrow">Checkout</p>
        <h1>Review your order</h1>
        <p className="bodyCopy">
          You are still on the Resonate website. Once you confirm below, you will be redirected to Stripe to complete payment.
        </p>

        <div className="checkoutLineItem">
          <div>
            <p className="checkoutItemName">{RESONATE_PRODUCT.name}</p>
            <p className="productMetaNote">{RESONATE_PRODUCT.shippingNote}</p>
          </div>
          <p className="checkoutItemPrice">
            {(RESONATE_PRODUCT.unitPriceCents / 100).toLocaleString("en-CA", {
              style: "currency",
              currency: RESONATE_PRODUCT.currency,
            })}
          </p>
        </div>

        <div className="checkoutQuantityRow">
          <span className="productMetaLabel">Quantity</span>
          <div className="checkoutQuantityControl">
            <button type="button" onClick={() => adjustQuantity(state.quantity - 1)} disabled={state.quantity <= 1}>
              −
            </button>
            <span>{state.quantity}</span>
            <button type="button" onClick={() => adjustQuantity(state.quantity + 1)} disabled={state.quantity >= 5}>
              +
            </button>
          </div>
        </div>

        <div className="checkoutTotalRow">
          <span>Total</span>
          <strong>{totalLabel}</strong>
        </div>

        <div className="checkoutNoticeList">
          <p>Shipping is billed separately after purchase.</p>
          <p>Financing options will be added here as soon as they are available.</p>
        </div>

        <div className="heroActions">
          <button type="button" className="button buttonDark checkoutContinueButton" onClick={handleContinue} disabled={loading}>
            {loading ? "Redirecting..." : "Continue to payment"}
          </button>
          <Link href="/#product" className="button buttonSecondaryOnLight">Back to product</Link>
        </div>

        {error ? <p className="formFeedback formFeedbackError">{error}</p> : null}
      </div>
    </div>
  );
}
