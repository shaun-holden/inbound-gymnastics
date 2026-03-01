"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "20+", label: "Years Competing" },
  { value: "100+", label: "Athletes Trained" },
  { value: "50+", label: "Meets Per Season" },
  { value: "Countless", label: "Personal Bests" },
];

export default function Achievements() {
  return (
    <section className="bg-[var(--accent)] py-20 px-6">
      <motion.div
        className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <p className="font-[family-name:var(--font-righteous)] text-4xl font-bold text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
