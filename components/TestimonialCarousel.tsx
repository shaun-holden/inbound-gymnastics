"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Quote icon */}
          <svg
            className="mx-auto mb-6 h-8 w-8 text-[var(--accent)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>

          <p className="mb-6 text-xl leading-relaxed text-[var(--foreground)] italic">
            &ldquo;{current.quote}&rdquo;
          </p>
          <p className="font-semibold text-[var(--foreground)]">
            {current.name}
          </p>
          <p className="text-sm text-[var(--muted)]">
            {current.relationship}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-[var(--accent)] w-6"
                : "bg-[var(--muted)]/30 hover:bg-[var(--muted)]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
