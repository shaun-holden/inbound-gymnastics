"use client";

import { motion } from "framer-motion";

export interface ClassInfo {
  title: string;
  ageRange: string;
  level: string;
  description: string;
  duration: string;
  schedule?: string;
}

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ClassCard({ classInfo }: { classInfo: ClassInfo }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <span className="mb-4 inline-block w-fit rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
        {classInfo.level}
      </span>

      <h3 className="mb-2 font-[family-name:var(--font-righteous)] text-xl font-bold text-[var(--foreground)]">
        {classInfo.title}
      </h3>

      <p className="mb-4 text-sm text-[var(--muted)]">
        {classInfo.ageRange} · {classInfo.duration}
      </p>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {classInfo.description}
      </p>

      {classInfo.schedule && (
        <p className="mb-4 text-xs text-[var(--muted)]">{classInfo.schedule}</p>
      )}

      <a
        href="https://portal.iclasspro.com/inbound/booking"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl bg-[var(--accent)] py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-dark)]"
      >
        Register Now
      </a>
    </motion.div>
  );
}
