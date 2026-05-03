import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="section sectionLight">
      <div className="shell checkoutStatePage">
        <p className="eyebrow">Checkout canceled</p>
        <h1>Your order wasn&apos;t completed yet.</h1>
        <p className="bodyCopy">
          You can return to the product section and start checkout again whenever you&apos;re ready.
        </p>

        <div className="heroActions">
          <Link href="/#product" className="button buttonDark">Back to product</Link>
          <Link href="/#contact" className="button buttonPrimaryOnLight">Ask a question</Link>
        </div>
      </div>
    </main>
  );
}
