import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#product", label: "Product" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Our Why" },
  { href: "#contact", label: "Contact" },
  { href: "/our-story", label: "Our Story" },
];

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerInner">
        <div className="footerBrandBlock">
          <Image
            src="/images/site/logo-dark.png"
            alt="Resonate Adaptive"
            width={2500}
            height={751}
            className="footerLogo"
          />
          <p className="footerCopy">
            Adaptive piano technology designed to restore access to the full potential of the instrument.
          </p>
        </div>

        <div className="footerMetaGrid">
          <div>
            <p className="footerLabel">Navigate</p>
            <div className="footerLinks">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footerLabel">Contact</p>
            <div className="footerLinks">
              <a href="mailto:info@resonateadaptive.com">info@resonateadaptive.com</a>
              <a href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </div>

      <Separator.Root className="footerSeparator" decorative orientation="horizontal" />

      <div className="shell footerBottom">
        <p>© 2026 Resonate Adaptive. All rights reserved.</p>
        <p>Designed for access, expression, and musical possibility.</p>
      </div>
    </footer>
  );
}
