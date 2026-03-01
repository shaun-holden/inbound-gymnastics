"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { events } from "@/data/events";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const typeColors: Record<string, string> = {
  meet:   "bg-purple-500/10 text-purple-400",
  camp:   "bg-yellow-500/10 text-yellow-400",
  clinic: "bg-blue-500/10 text-blue-400",
  event:  "bg-green-500/10 text-green-400",
};

export default function EventsSection() {
  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Calendar"
          heading="Events & Calendar"
          subheading="Stay up to date with what's happening at In Bound."
        />

        {events.length === 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-16 text-center"
          >
            <p className="text-lg text-[var(--muted)]">
              No upcoming events at this time. Check back soon!
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {events.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:flex-row sm:items-center"
              >
                {/* Date badge */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10">
                  <svg className="h-7 w-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>

                {/* Event details */}
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-[var(--foreground)]">{event.title}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${typeColors[event.type] || "bg-[var(--accent)]/10 text-[var(--accent)]"}`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="mb-1 text-sm font-medium text-[var(--accent)]">{event.date}</p>
                  <p className="text-sm text-[var(--muted)]">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
