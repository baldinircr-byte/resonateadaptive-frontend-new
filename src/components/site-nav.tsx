"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Our Why" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <NavigationMenu.Root className="heroNav heroNavDesktop">
        <NavigationMenu.List className="heroNavList">
          {links.map((link) => (
            <NavigationMenu.Item key={link.href}>
              <NavigationMenu.Link asChild>
                <a href={link.href}>{link.label}</a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div className={`mobileStickyNav ${scrolled ? "mobileStickyNavVisible" : ""}`}>
        <Link href="/" className="mobileStickyBrand" aria-label="Resonate Adaptive home">
          <Image
            src="/images/site/logo-dark.png"
            alt="Resonate Adaptive"
            width={2500}
            height={751}
            className="mobileStickyLogo"
          />
        </Link>

        <ScrollArea.Root className="mobileStickyScrollArea" type="hover">
          <ScrollArea.Viewport className="mobileStickyViewport">
            <NavigationMenu.Root className="mobileStickyMenuRoot" orientation="horizontal">
              <NavigationMenu.List className="mobileStickyList">
                {links.map((link) => (
                  <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Link asChild>
                      <a href={link.href} className="mobileStickyLink">
                        {link.label}
                      </a>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar className="scrollAreaScrollbar" orientation="horizontal">
            <ScrollArea.Thumb className="scrollAreaThumb" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </>
  );
}
