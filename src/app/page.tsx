import Image from "next/image";

import { ContactForm } from "@/components/contact-form";

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
          <Image
            src="/images/site/logo-dark.png"
            alt="Resonate Adaptive"
            width={2500}
            height={751}
            className="heroLogo"
            priority
          />
          <div className="heroTextBlock">
            <p className="heroKicker">Play Without Limits</p>
            <h1>Make Music Accessible</h1>
            <p className="heroLead">
              The first device that allows people with disabilities to access the full potential of the piano.
              Resonate Adaptive makes it possible for disabled individuals to press the damper pedal without the need for lower limb function.
            </p>
            <div className="heroActions">
              <a href="#why" className="button buttonPrimary">Our Why</a>
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
        <div className="shell">
          <p className="eyebrow">PRODUCT</p>
        </div>
      </section>

      <section id="about" className="section sectionLight sectionLightAlt">
        <div className="shell">
          <p className="eyebrow">ABOUT</p>
        </div>
      </section>

      <section id="why" className="section sectionDark">
        <div className="shell">
          <p className="eyebrow eyebrowLight">Our Why</p>
          <h2 className="sectionTitleLight">Built on real stories.</h2>
          <div className="testimonialGrid">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonialCard">
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
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
    </main>
  );
}
