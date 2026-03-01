"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function History() {
  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Our Story"
          heading="About In Bound Gymnastics"
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          {/* Left: history text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-6 text-lg leading-relaxed text-[var(--muted)]">
              Founded in 2005, In Bound Gymnastics has been a cornerstone of
              the Albany, Georgia community for over two decades. What started as
              a small gym with a big dream has grown into one of the area&apos;s
              premier gymnastics facilities.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-[var(--muted)]">
              Our mission is simple: to build confidence, strength, and character
              in every child who walks through our doors. We believe gymnastics
              teaches more than just physical skills — it builds discipline,
              perseverance, and self-belief that carries into every area of life.
            </p>
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              From our Shooting Stars preschool program to our competitive team,
              every athlete at In Bound is part of our family. We celebrate every
              cartwheel, every handstand, and every personal best — because
              progress, no matter how small, deserves recognition.
            </p>
          </motion.div>

          {/* Right: placeholder for image */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="text-sm text-[var(--muted)]/50">Facility photo coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
