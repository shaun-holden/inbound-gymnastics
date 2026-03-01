"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamInfo() {
  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Compete"
          heading="Competitive Team"
          subheading="Take your gymnastics to the next level."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-6 text-lg leading-relaxed text-[var(--muted)]">
              The In Bound Gymnastics competitive team program is designed for
              dedicated athletes who want to compete at local, regional, and
              state levels. Our experienced coaching staff provides personalized
              training to help each athlete reach their full potential.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-[var(--muted)]">
              Team members train multiple days per week with focused instruction
              on all four apparatus: vault, uneven bars, balance beam, and floor
              exercise. We compete in USAG-sanctioned meets throughout the season.
            </p>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="mb-4 font-semibold text-[var(--foreground)]">Team Details</h3>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Levels 2 through 10 and Xcel program
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Practice 3–5 days per week depending on level
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Tryouts held annually — contact us for details
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Compete in USAG-sanctioned meets across Georgia
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: placeholder for team photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <svg className="mx-auto mb-3 h-12 w-12 text-[var(--muted)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <p className="text-sm text-[var(--muted)]/50">Team photo coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
