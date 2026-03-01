"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ClassCard from "@/components/ClassCard";
import { classes } from "@/data/classes";
import Link from "next/link";

const featured = classes.slice(0, 3);

export default function ClassPreview() {
  return (
    <section className="bg-[var(--background-alt)] py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Our Classes"
          heading="Find the Right Class"
          subheading="From tiny tumblers to competitive athletes — there's a place for everyone."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {featured.map((c) => (
            <ClassCard key={c.title} classInfo={c} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-dark)]"
          >
            View All Classes
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
