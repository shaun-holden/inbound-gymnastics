"use client";

import SectionHeader from "@/components/SectionHeader";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Testimonials() {
  return (
    <section className="bg-[var(--background-alt)] py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Testimonials"
          heading="What Parents Say"
          subheading="Don't just take our word for it — hear from the #IBGfamily."
        />
        <TestimonialCarousel />
      </div>
    </section>
  );
}
