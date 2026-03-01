"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
}

export default function SectionHeader({ eyebrow, heading, subheading }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-righteous)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-[var(--muted)]">{subheading}</p>
      )}
    </motion.div>
  );
}
