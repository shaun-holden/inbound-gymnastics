"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",             href: "/" },
  { label: "About",            href: "/about" },
  { label: "Classes",          href: "/classes" },
  { label: "Camps",            href: "/camps" },
  { label: "Parties",          href: "/parties" },
  { label: "Competitive Team", href: "/competitive-team" },
  { label: "Events",           href: "/events" },
  { label: "Contact",          href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-righteous)] text-xl font-bold tracking-tight text-[var(--foreground)]"
        >
          In Bound<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                  pathname === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://portal.iclasspro.com/inbound/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)] lg:block"
        >
          Enroll Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-[var(--card)] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background-alt)] lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--card)] hover:text-[var(--accent)] ${
                      pathname === link.href
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 border-t border-[var(--border)] pt-3">
                <a
                  href="https://portal.iclasspro.com/inbound/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="block rounded-full bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[var(--accent-dark)]"
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
