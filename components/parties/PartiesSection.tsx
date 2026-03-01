"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const packages = [
  {
    title: "Basic Party",
    price: "Contact for pricing",
    description: "A fun-filled gymnastics birthday party your child will never forget.",
    includes: [
      "1.5 hours of gym time",
      "Use of all equipment",
      "Party room for cake & gifts",
      "Set-up and clean-up",
      "Up to 15 kids",
    ],
    featured: false,
  },
  {
    title: "Deluxe Party",
    price: "Contact for pricing",
    description: "Our most popular package with extra time and special additions.",
    includes: [
      "2 hours of gym time",
      "Use of all equipment",
      "Party room for cake & gifts",
      "Set-up and clean-up",
      "Up to 20 kids",
      "Dedicated party coordinator",
    ],
    featured: true,
  },
  {
    title: "Ultimate Party",
    price: "Contact for pricing",
    description: "The full VIP experience for an unforgettable celebration.",
    includes: [
      "2.5 hours of gym time",
      "Use of all equipment",
      "Party room for cake & gifts",
      "Set-up and clean-up",
      "Up to 25 kids",
      "Dedicated party coordinator",
      "Goodie bags for guests",
    ],
    featured: false,
  },
];

export default function PartiesSection() {
  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Celebrate"
          heading="Birthday Parties"
          subheading="Make their special day unforgettable at In Bound Gymnastics."
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
          {packages.map((pkg) => {
            const f = pkg.featured;
            return (
              <motion.div
                key={pkg.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                  f
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                }`}
              >
                {f && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-[var(--accent)] shadow-md">
                    Most Popular
                  </span>
                )}

                <h3 className={`mb-2 font-[family-name:var(--font-righteous)] text-xl font-bold ${f ? "text-white" : "text-[var(--foreground)]"}`}>
                  {pkg.title}
                </h3>

                <p className={`mb-1 text-lg font-bold ${f ? "text-white" : "text-[var(--foreground)]"}`}>
                  {pkg.price}
                </p>

                <p className={`mb-6 text-sm leading-relaxed ${f ? "text-white/80" : "text-[var(--muted)]"}`}>
                  {pkg.description}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${f ? "text-white/80" : "text-[var(--accent)]"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${f ? "text-white/90" : "text-[var(--muted)]"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    f
                      ? "bg-white text-[var(--accent)] hover:bg-gray-100"
                      : "bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20"
                  }`}
                >
                  Book a Party
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What to expect */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="mb-8 text-center font-[family-name:var(--font-righteous)] text-2xl font-bold text-[var(--foreground)]">
            What to Expect
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Gym Access", desc: "Full use of our gymnastics equipment and open floor space." },
              { title: "Party Room", desc: "Private room for cake, presents, and celebrating." },
              { title: "Setup Included", desc: "We handle the tables, chairs, and gym setup." },
              { title: "Clean-Up Done", desc: "No mess to worry about — we take care of everything." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-center"
              >
                <h4 className="mb-2 font-semibold text-[var(--foreground)]">{item.title}</h4>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
