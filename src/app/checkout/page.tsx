import { CheckoutSummary } from "@/components/checkout-summary";
import { Footer } from "@/components/footer";

export default function CheckoutPage() {
  return (
    <>
      <main className="section sectionLight sectionWhite">
        <div className="shell">
          <CheckoutSummary />
        </div>
      </main>
      <Footer />
    </>
  );
}
