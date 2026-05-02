import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <main className="section sectionLight storyPage">
      <div className="shell storyPageShell">
        <div className="storyPageIntro">
          <p className="eyebrow">Our Story</p>
          <h1>Let OUR Story become YOUR Story.</h1>
        </div>

        <div className="storyGallery storyGallerySingle">
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
        </div>

        <div className="storyCopy">
          <p>Ciao! My name is Riccardo, co-founder of Resonate.</p>
          <p>
            I’ve been playing the piano since I was five years old. Music has always been a fundamental part of who
            I am.
          </p>
          <p>
            In 2019, a spinal cord injury left me paralyzed from the chest down. Overnight, everything changed—including
            my ability to play the piano the way I always had. Without lower limb function, using the traditional pedal
            system was no longer possible.
          </p>
          <p>
            Losing that connection to the instrument was one of the hardest moments of my life. But I was determined to
            find a way back.
          </p>
          <p>That determination became the beginning of Resonate.</p>
          <p>
            Together with Steve Bosch, a Mechanical Design Engineer, we developed a new way to control the piano
            pedals—one that doesn’t rely on the legs. After years of iteration and problem-solving, Resonate became a
            reality.
          </p>
          <p>
            In October 2022, I returned to the stage for the first time since my injury. It was a moment I’ll never
            forget.
          </p>
          <p>
            Resonate is more than a device—it’s about restoring access, possibility, and expression. Music should never
            be limited by physical barriers.
          </p>
          <p>
            My hope is that Resonate becomes a gateway for anyone with limited lower limb function to experience the full
            potential of the piano.
          </p>
          <p>
            With your support, we can empower musicians, future musicians, and music lovers of all abilities to unlock
            what’s possible—making the world a better place, one note at a time.
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
