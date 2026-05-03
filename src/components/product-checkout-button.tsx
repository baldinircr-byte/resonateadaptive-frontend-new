"use client";

import { useState } from "react";

export function ProductCheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: 1 }),
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
    <div className="productCheckoutWrap">
      <button type="button" className="button buttonDark productCheckoutButton" onClick={handleClick} disabled={loading}>
        {loading ? "Redirecting..." : "Order Resonate"}
      </button>
      {error ? <p className="formFeedback formFeedbackError">{error}</p> : null}
    </div>
  );
}
