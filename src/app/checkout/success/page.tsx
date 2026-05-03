import Link from "next/link";

import { getStripeServerClient } from "@/lib/stripe";

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function CheckoutSuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  let sessionSummary: {
    customerName: string | null;
    customerEmail: string | null;
    amountTotal: number | null;
    currency: string | null;
  } | null = null;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    const stripe = getStripeServerClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    sessionSummary = {
      customerName: session.customer_details?.name ?? null,
      customerEmail: session.customer_details?.email ?? null,
      amountTotal: session.amount_total ?? null,
      currency: session.currency ?? null,
    };
  }

  return (
    <main className="section sectionLight">
      <div className="shell checkoutStatePage">
        <p className="eyebrow">Order received</p>
        <h1>Thanks — your Resonate order request is in motion.</h1>
        <p className="bodyCopy">
          We&apos;ve received your checkout details. Shipping is not charged online yet and will be arranged separately after purchase.
        </p>

        {sessionSummary ? (
          <div className="checkoutStateCard">
            {sessionSummary.customerName ? <p><strong>Name:</strong> {sessionSummary.customerName}</p> : null}
            {sessionSummary.customerEmail ? <p><strong>Email:</strong> {sessionSummary.customerEmail}</p> : null}
            {sessionSummary.amountTotal != null && sessionSummary.currency ? (
              <p>
                <strong>Product total:</strong>{" "}
                {(sessionSummary.amountTotal / 100).toLocaleString("en-CA", {
                  style: "currency",
                  currency: sessionSummary.currency.toUpperCase(),
                })}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="heroActions">
          <Link href="/#product" className="button buttonDark">Back to product</Link>
          <Link href="/#contact" className="button buttonPrimaryOnLight">Get in touch</Link>
        </div>
      </div>
    </main>
  );
}
