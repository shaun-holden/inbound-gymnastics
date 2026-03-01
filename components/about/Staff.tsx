"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { staff } from "@/data/staff";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Staff() {
  return (
    <section className="bg-[var(--background-alt)] py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Our Team"
          heading="Meet the Coaches"
          subheading="The heart of In Bound Gymnastics."
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
          {staff.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Placeholder avatar */}
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)]/10">
                <span className="font-[family-name:var(--font-righteous)] text-2xl text-[var(--accent)]">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>

              <h3 className="mb-1 font-[family-name:var(--font-righteous)] text-xl font-bold text-[var(--foreground)]">
                {member.name}
              </h3>
              <p className="mb-4 text-sm font-semibold text-[var(--accent)]">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
