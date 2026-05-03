import Stripe from "stripe";

const STRIPE_API_VERSION = "2026-04-22.dahlia" as const;

let stripeClient: Stripe | null = null;

export function getStripeServerClient() {
  const apiKey = process.env.STRIPE_SECRET_KEY;

  if (!apiKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(apiKey, {
      apiVersion: STRIPE_API_VERSION,
    });
  }

  return stripeClient;
}

export function getStripeEnvironment() {
  return {
    enabled: Boolean(process.env.STRIPE_SECRET_KEY),
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://resonateadaptive.com",
  };
}
