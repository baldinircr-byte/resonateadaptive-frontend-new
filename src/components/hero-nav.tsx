"use client";

import { useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Our Why" },
  { href: "#contact", label: "Contact" },
];

export function HeroNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="heroNav heroNavDesktop" aria-label="Section navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="heroNavMobileWrap">
        <button
          type="button"
          className="heroMenuButton"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        {open ? (
          <nav className="heroNavMobile" aria-label="Mobile section navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </>
  );
}
