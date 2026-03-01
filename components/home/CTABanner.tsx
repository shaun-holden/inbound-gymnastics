"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function CTABanner() {
  return (
    <section className="bg-[var(--accent)] py-20 px-6">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="mb-4 font-[family-name:var(--font-righteous)] text-3xl font-bold text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Join the In Bound family today. Your child&apos;s gymnastics journey starts here.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://portal.iclasspro.com/inbound/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--accent)] shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
          >
            Enroll Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[var(--accent)]"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
