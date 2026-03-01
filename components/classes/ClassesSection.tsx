"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ClassCard from "@/components/ClassCard";
import { classes } from "@/data/classes";

const filters = ["All", "Pre-School", "Beginner", "Advanced", "Specialty"];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ClassesSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? classes
    : classes.filter((c) => c.level === active);

  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Programs"
          heading="Our Classes"
          subheading="Find the perfect class for your gymnast."
        />

        {/* Filter tabs */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "bg-[var(--accent)] text-white shadow-lg"
                  : "bg-[var(--card)] text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)]"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Class cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {filtered.map((c) => (
              <ClassCard key={c.title} classInfo={c} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enroll CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-4 text-[var(--muted)]">
            Ready to join? Register through our online portal.
          </p>
          <a
            href="https://portal.iclasspro.com/inbound/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[var(--accent-dark)] hover:shadow-xl"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
