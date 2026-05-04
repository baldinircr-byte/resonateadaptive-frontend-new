"use client";

import { useRouter } from "next/navigation";

import { RESONATE_CHECKOUT_STORAGE_KEY } from "@/lib/resonate-checkout";

export function ProductCheckoutButton() {
  const router = useRouter();

  function handleClick() {
    window.localStorage.setItem(
      RESONATE_CHECKOUT_STORAGE_KEY,
      JSON.stringify({ quantity: 1 }),
    );
    router.push("/checkout");
  }

  return (
    <div className="productCheckoutWrap">
      <button type="button" className="button buttonDark productCheckoutButton" onClick={handleClick}>
        Order Now
      </button>
    </div>
  );
}
