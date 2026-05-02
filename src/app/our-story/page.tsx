import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <main className="section sectionLight storyPage">
      <div className="shell storyPageShell">
        <div className="storyPageIntro">
          <p className="eyebrow">Our Story</p>
          <h1>From personal loss to a new way forward at the piano.</h1>
        </div>

        <div className="storyGallery">
          <div className="imageCard storyGalleryMain">
            <Image
              src="/images/pages/about-riccardo.jpg"
              alt="Riccardo seated at the piano"
              width={1200}
              height={900}
              className="featureImage"
              priority
            />
          </div>
          <div className="storyGallerySide">
            <div className="imageCard">
              <Image
                src="/images/pages/hero-wheelchair.jpg"
                alt="Riccardo playing piano in a wheelchair"
                width={1600}
                height={1200}
                className="featureImage"
              />
            </div>
            <div className="imageCard">
              <Image
                src="/images/pages/hero-main.jpg"
                alt="Riccardo performing at the piano"
                width={1600}
                height={1067}
                className="featureImage"
              />
            </div>
          </div>
        </div>

        <div className="storyCopy">
          <p>
            My name is Riccardo, co-founder of Resonate. I have been playing piano since I was five years old,
            and music has always been a fundamental part of who I am.
          </p>
          <p>
            In 2019, a spinal cord injury changed the way I could move through the world and made the traditional
            piano pedal system inaccessible to me. Losing that connection to the instrument was one of the hardest
            moments of my life, but I was determined to find a way back.
          </p>
          <p>
            That determination became the beginning of Resonate: a new way to make full piano expression possible
            without lower limb function. What started as a personal need became a larger mission to restore access,
            possibility, and expression for other musicians too.
          </p>
          <p>
            Resonate exists because music should not be limited by physical barriers. My hope is that it opens the
            door for more pianists to experience the full potential of the instrument.
          </p>
        </div>

        <div className="storyPageActions">
          <Link href="/#about" className="button buttonDark">Back to home</Link>
          <Link href="/#contact" className="button buttonPrimaryOnLight">Get in touch</Link>
        </div>
      </div>
    </main>
  );
}
