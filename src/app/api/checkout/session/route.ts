import { NextResponse } from "next/server";
import { z } from "zod";

import { getStripeEnvironment, getStripeServerClient } from "@/lib/stripe";

const checkoutRequestSchema = z.object({
  quantity: z.number().int().min(1).max(5).default(1),
});

const FALLBACK_UNIT_AMOUNT_CENTS = 480000;
const FALLBACK_CURRENCY = "cad";

export async function POST(request: Request) {
  try {
    const { quantity } = checkoutRequestSchema.parse(await request.json());
    const stripe = getStripeServerClient();
    const { siteUrl } = getStripeEnvironment();

    const stripePriceId = process.env.STRIPE_RESONATE_PRICE_ID;

    const lineItems = stripePriceId
      ? [
          {
            price: stripePriceId,
            quantity,
          },
        ]
      : [
          {
            price_data: {
              currency: FALLBACK_CURRENCY,
              unit_amount: FALLBACK_UNIT_AMOUNT_CENTS,
              product_data: {
                name: "Resonate Adaptive",
                description:
                  "Adaptive piano pedal device for restoring access to the full potential of the piano.",
              },
            },
            quantity,
          },
        ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["CA", "US", "GB", "IE", "AU", "NZ", "DE", "FR", "NL", "BE", "CH", "AT", "SE", "NO", "DK", "FI", "IT", "ES", "PT", "CO"],
      },
      phone_number_collection: {
        enabled: true,
      },
      custom_fields: [
        {
          key: "shipping_ack",
          label: {
            type: "custom",
            custom: "Shipping billed separately",
          },
          type: "dropdown",
          dropdown: {
            options: [
              {
                label: "I understand",
                value: "understood",
              },
            ],
          },
        },
      ],
      line_items: lineItems,
      metadata: {
        product: "resonate-adaptive",
        shipping_policy: "shipping_billed_separately",
        financing_status: "coming_soon",
      },
      allow_promotion_codes: false,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("checkout session route failed", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create checkout session.",
      },
      { status: 400 },
    );
  }
}
