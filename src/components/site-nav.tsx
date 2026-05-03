"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Resonate" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

      <div className={`mobileStickyHeader ${scrolled ? "mobileStickyHeaderVisible" : ""}`}>
        <div className="mobileStickyHeaderInner">
          <Link
            href="/"
            className="mobileStickyBrand"
            aria-label="Resonate Adaptive home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/site/logo-dark.png"
              alt="Resonate Adaptive"
              width={2500}
              height={751}
              className="mobileStickyLogo"
            />
          </Link>

          <button
            type="button"
            className="mobileStickyMenuButton"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobileStickyPanel ${open ? "mobileStickyPanelOpen" : ""}`}>
          <NavigationMenu.Root>
            <NavigationMenu.List className="mobileStickyPanelList">
              {links.map((link) => (
                <NavigationMenu.Item key={link.href}>
                  <NavigationMenu.Link asChild>
                    <a href={link.href} className="mobileStickyPanelLink" onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </div>
    </>
  );
}
