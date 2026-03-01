"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { events, type IBGEvent } from "@/data/events";
import { getGoogleCalendarUrl, downloadICS } from "@/lib/calendar";

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

function CalendarDropdown({ event }: { event: IBGEvent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Add to calendar"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-all hover:bg-[var(--accent)]/20"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-10 w-52 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-xl">
          <p className="border-b border-[var(--border)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Add to Calendar
          </p>

          {/* Google Calendar */}
          <a
            href={getGoogleCalendarUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5} />
              <path d="M3 9h18" stroke="currentColor" strokeWidth={1.5} />
              <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
              <circle cx="12" cy="15" r="1.5" fill="#4285F4" />
            </svg>
            Google Calendar
          </a>

          {/* Apple Calendar */}
          <button
            type="button"
            onClick={() => {
              downloadICS(event);
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5} />
              <path d="M3 9h18" stroke="currentColor" strokeWidth={1.5} />
              <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
              <path d="M12 13v4m0 0l-2-2m2 2l2-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Apple Calendar (.ics)
          </button>
        </div>
      )}
    </div>
  );
}

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

                {/* Add to Calendar button */}
                <CalendarDropdown event={event} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
