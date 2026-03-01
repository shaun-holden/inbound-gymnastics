"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background gradient overlay — will be replaced with image later */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-[var(--background)] to-[var(--background)]" />

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />

      {/* Content */}
      <motion.div
        className="relative max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]"
        >
          Est. 2005 · Albany, Georgia
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 font-[family-name:var(--font-righteous)] text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-7xl lg:text-8xl"
        >
          In Bound{" "}
          <span className="text-[var(--accent)]">Gymnastics</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-xl leading-relaxed text-[var(--muted)] sm:text-2xl"
        >
          Building confidence, strength, and champions for over 20 years.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <CTAButton
            href="https://portal.iclasspro.com/inbound/booking"
            variant="primary"
            external
          >
            Enroll Today
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>
          <CTAButton href="/classes" variant="secondary">
            View Classes
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-[var(--muted)]"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
