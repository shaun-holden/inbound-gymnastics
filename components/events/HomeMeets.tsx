"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeMeets() {
  return (
    <section className="bg-[var(--background-alt)] py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Home Meets"
          heading="Competition at IBG"
          subheading="We host gymnastics meets right here at our facility."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-[family-name:var(--font-righteous)] text-xl font-bold text-[var(--foreground)]">
                About Our Home Meets
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                In Bound Gymnastics is proud to host USAG-sanctioned meets at
                our facility. These events bring together gymnasts from across
                the region for a day of competition, camaraderie, and celebration.
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                Home meets are a wonderful opportunity for our athletes to
                compete in a familiar environment with their families cheering
                them on. Check our events calendar for upcoming meet dates.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-[family-name:var(--font-righteous)] text-xl font-bold text-[var(--foreground)]">
                For Visiting Teams
              </h3>
              <ul className="space-y-3 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Full competition equipment on-site
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Spectator seating available
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Warm-up areas for all teams
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Awards ceremony following competition
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
