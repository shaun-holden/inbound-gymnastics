"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const camps = [
  {
    season: "Spring Break",
    title: "Spring Break Camp",
    dates: "March 17–21, 2026",
    ageRange: "Ages 4+",
    description:
      "A week of gymnastics fun during spring break! Perfect for all skill levels. Includes structured instruction, free play, games, and crafts.",
  },
  {
    season: "Summer",
    title: "Summer Camp — Session 1",
    dates: "June 2–6, 2026",
    ageRange: "Ages 4+",
    description:
      "Our most popular camp! Full days of gymnastics instruction, team-building activities, games, and fun in a safe, supervised environment.",
  },
  {
    season: "Summer",
    title: "Summer Camp — Session 2",
    dates: "June 16–20, 2026",
    ageRange: "Ages 4+",
    description:
      "Another week of summer gymnastics camp with themed activities, skill challenges, and plenty of fun for returning and new campers.",
  },
  {
    season: "Winter",
    title: "Winter Break Camp",
    dates: "December 2026 — Dates TBD",
    ageRange: "Ages 4+",
    description:
      "Keep your kids active over winter break with gymnastics activities, holiday-themed games, and skill development.",
  },
];

const seasonColors: Record<string, string> = {
  "Spring Break": "bg-green-500/10 text-green-400",
  "Summer":       "bg-yellow-500/10 text-yellow-400",
  "Winter":       "bg-blue-500/10 text-blue-400",
};

export default function CampsSection() {
  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Summer & Holiday"
          heading="Gymnastics Camps"
          subheading="Fun, active camps during school breaks — gymnastics instruction, games, and more."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {camps.map((camp) => (
            <motion.div
              key={camp.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-shadow duration-300 hover:shadow-xl"
            >
              <span className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${seasonColors[camp.season] || "bg-[var(--accent)]/10 text-[var(--accent)]"}`}>
                {camp.season}
              </span>

              <h3 className="mb-2 font-[family-name:var(--font-righteous)] text-xl font-bold text-[var(--foreground)]">
                {camp.title}
              </h3>

              <p className="mb-4 text-sm text-[var(--muted)]">
                {camp.dates} · {camp.ageRange}
              </p>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {camp.description}
              </p>

              <a
                href="https://portal.iclasspro.com/inbound/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-[var(--accent)] py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-dark)]"
              >
                Register Now
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
