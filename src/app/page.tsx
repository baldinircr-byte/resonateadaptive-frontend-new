import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { ProductCheckoutButton } from "@/components/product-checkout-button";
import { SiteNav } from "@/components/site-nav";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

const testimonials = [
  {
    quote:
      "I’m a T3 paraplegic. I currently play the piano without use of the pedals and have been trying to find a solution for the last 20 years. This would completely change how I play.",
    author: "Steve J.",
  },
  {
    quote:
      "Our son is learning piano but can’t use the pedals, which really limits him. We’re very interested in a device like this—it would open up so many more possibilities for him.",
    author: "Maria (parent)",
  },
  {
    quote:
      "Hello, I am a music therapist working with individuals with spinal cord injuries. I often see patients who lose the ability to use piano pedals after injury. Having access to a device like this would allow them to continue playing and regain an important part of their lives.",
    author: "Bailey",
  },
  {
    quote:
      "I grew up playing the piano but after a spinal cord injury, I wasn’t able to use the pedals anymore. I recently started playing again, and a device like this would be a complete game changer.",
    author: "Alissa P.",
  },
  {
    quote:
      "I’m a music student and have been playing piano since I was 7. I also have a spinal injury and use a wheelchair. Not being able to use the pedals became a major limitation as I advanced. Discovering this has restored my confidence and made me feel like I can continue pursuing piano.",
    author: "Hannah H.",
  },
  {
    quote:
      "I have a friend who has played piano her whole life but recently lost her ability to play fully due to her disability. Seeing something like this gives her real hope to continue doing what she loves.",
    author: "Kirsty",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/pages/hero-main.jpg"
          alt="Riccardo playing the piano in a wheelchair"
          fill
          priority
          className="heroImage"
        />
        <div className="heroOverlay" />
        <div className="shell heroContent">
          <div className="heroTopbar">
            <Image
              src="/images/site/logo-dark.png"
              alt="Resonate Adaptive"
              width={2500}
              height={751}
              className="heroLogo"
              priority
            />
            <SiteNav />
          </div>
          <div className="heroTextBlock">
            <p className="heroKicker">Play Without Limits</p>
            <h1>Make Music Accessible</h1>
            <p className="heroLead">
              The first device that allows people with disabilities to access the full potential of the piano.
              Resonate Adaptive makes it possible for disabled individuals to press the damper pedal without the need for lower limb function.
            </p>
            <div className="heroActions">
              <a href="#why" className="button buttonPrimary">Why Resonate</a>
              <a href="#contact" className="button buttonSecondary">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell storyGrid">
          <div>
            <p className="eyebrow">The idea</p>
            <h2>A clear problem. A real need. A meaningful solution.</h2>
            <p className="bodyCopy">
              For pianists who cannot use their lower limbs, the damper pedal becomes an access barrier to the instrument itself. Resonate exists to restore full expression at the piano.
            </p>
          </div>
          <div className="imageCard">
            <Image
              src="/images/pages/mouthpiece.jpg"
              alt="Resonate mouthpiece"
              width={1500}
              height={1090}
              className="featureImage"
            />
          </div>
        </div>
      </section>

      <section id="product" className="section sectionLight">
        <div className="shell storyGrid productGrid">
          <div>
            <p className="eyebrow">Product</p>
            <h2>Resonate Adaptive</h2>
            <p className="bodyCopy">
              A purpose-built adaptive device designed to restore access to the full potential of the piano for musicians who cannot use the traditional damper pedal with their lower limbs.
            </p>

            <div className="productMetaGrid">
              <div className="productMetaCard">
                <p className="productMetaLabel">Price</p>
                <p className="productMetaValue">C$4,800</p>
                <p className="productMetaNote">Shipping is billed separately.</p>
              </div>
              <div className="productMetaCard">
                <p className="productMetaLabel">Status</p>
                <p className="productMetaValue">First production run</p>
                <p className="productMetaNote">Orders are now being accepted.</p>
              </div>
            </div>

            <div className="productDetailList">
              <div>
                <p className="productMetaLabel">What it does</p>
                <p className="bodyCopy compactCopy">
                  Resonate gives pianists a new way to control the sustain pedal without relying on lower limb function, restoring access to phrasing, sustain, and a fuller experience of the instrument.
                </p>
              </div>
              <div>
                <p className="productMetaLabel">What happens at checkout</p>
                <p className="bodyCopy compactCopy">
                  Customers can complete purchase online now. Shipping details are collected during checkout, and shipping is arranged separately afterward so purchase is never blocked by shipping calculation issues.
                </p>
              </div>
              <div>
                <p className="productMetaLabel">Financing</p>
                <p className="bodyCopy compactCopy">
                  Financing options are planned and will be integrated here as soon as they are available.
                </p>
              </div>
            </div>

            <div className="heroActions">
              <ProductCheckoutButton />
              <a href="#contact" className="button buttonSecondaryOnLight">Product questions</a>
            </div>
          </div>

          <div className="imagePlaceholderCard productPlaceholderCard">
            <div className="imagePlaceholderInner">
              <div>
                <p className="productPlaceholderTitle">Product photo coming soon</p>
                <p>
                  This space is reserved for product photography, installation detail, and a clearer visual explanation of the device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section sectionLight sectionLightAlt">
        <div className="shell storyGrid">
          <div className="imageCard imageCardTall">
            <Image
              src="/images/pages/about-riccardo.jpg"
              alt="Riccardo seated at the piano"
              width={1200}
              height={900}
              className="featureImage"
            />
          </div>
          <div>
            <p className="eyebrow">About</p>
            <h2>Resonate began with Riccardo’s search to regain the full potential of the piano.</h2>
            <p className="bodyCopy">
              After a spinal cord injury made the traditional pedal system inaccessible, Resonate began as a personal
              effort to restore access, expression, and possibility at the instrument.
            </p>
            <div className="heroActions">
              <Link href="/our-story" className="button buttonDark">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section sectionDark">
        <div className="shell">
          <p className="eyebrow eyebrowLight">Why Resonate</p>
          <h2 className="sectionTitleLight">Built on real stories.</h2>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="section sectionLight">
        <div className="shell closingGrid">
          <div className="imageCard imageCardTall">
            <Image
              src="/images/pages/get-in-touch.jpg"
              alt="Riccardo playing piano in a wheelchair"
              width={1280}
              height={853}
              className="featureImage"
            />
          </div>
          <div id="contact" className="contactBlock">
            <p className="eyebrow">Get in touch</p>
            <h2>Please reach out with any questions, product inquiries, or simply to tell us your story.</h2>
            <p className="bodyCopy">
              If this could help you, your child, your students, or your program, we want to hear from you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
