"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const athletes = [
  {
    name: "Athlete Name",
    level: "Level 7",
    bio: "Competing since age 6, specializing in bars and beam. Multiple regional podium finishes.",
  },
  {
    name: "Athlete Name",
    level: "Level 5",
    bio: "Rising star in our program with exceptional floor exercise skills and strong all-around scores.",
  },
  {
    name: "Athlete Name",
    level: "Xcel Gold",
    bio: "Dedicated athlete who demonstrates the heart and work ethic that define In Bound Gymnastics.",
  },
];

export default function Athletes() {
  return (
    <section className="bg-[var(--background-alt)] py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Spotlights"
          heading="Our Athletes"
          subheading="Celebrating the dedication and talent of our competitive team."
        />

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {athletes.map((athlete, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Placeholder avatar */}
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)]/10">
                <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <h3 className="mb-1 font-[family-name:var(--font-righteous)] text-lg font-bold text-[var(--foreground)]">
                {athlete.name}
              </h3>
              <p className="mb-4 text-sm font-semibold text-[var(--accent)]">
                {athlete.level}
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {athlete.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
