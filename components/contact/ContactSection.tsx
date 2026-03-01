"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

// TODO: Create a Formspree form and replace this URL
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    label: "1908 North Slappey Boulevard, Albany, GA 31701",
    href: "https://maps.google.com/?q=1908+North+Slappey+Boulevard+Albany+GA+31701",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "(229) 449-5609",
    href: "tel:+12294495609",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/InBoundGymnastics",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/inboundgymnastics_est2005",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-all placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";

  return (
    <section className="bg-[var(--background)] pt-32 pb-28 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Get In Touch"
          heading="Contact Us"
          subheading="Have a question? We'd love to hear from you."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          {/* Left: contact info + map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Contact links */}
            <ul className="mb-8 space-y-5">
              {contactInfo.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--card)] text-[var(--muted)] ring-1 ring-[var(--border)] transition-all group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent)] group-hover:ring-[var(--accent)]/30">
                      {link.icon}
                    </span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Business hours */}
            <div className="mb-8 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="mb-4 font-semibold text-[var(--foreground)]">Business Hours</h3>
              <div className="space-y-2 text-sm text-[var(--muted)]">
                <div className="flex justify-between">
                  <span>Monday – Thursday</span>
                  <span>3:00 PM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>3:00 PM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
              <iframe
                title="In Bound Gymnastics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.8!2d-84.17!3d31.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM2JzAwLjAiTiA4NMKwMTAnMTIuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-green-800 bg-green-900/20 px-8 py-16 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-900/30">
                  <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[var(--foreground)]">Message sent!</h3>
                <p className="text-[var(--muted)]">Thanks for reaching out. We&apos;ll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
              >
                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[var(--foreground)]">
                    Name
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={fields.name} onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>

                <div className="mb-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--foreground)]">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={fields.email} onChange={handleChange}
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-[var(--foreground)]">
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={fields.phone} onChange={handleChange}
                      placeholder="(229) 555-0123"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-[var(--foreground)]">
                    Subject
                  </label>
                  <select
                    id="subject" name="subject" required
                    value={fields.subject} onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a topic...</option>
                    <option value="Classes">Classes</option>
                    <option value="Camps">Camps</option>
                    <option value="Parties">Birthday Parties</option>
                    <option value="Competitive Team">Competitive Team</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[var(--foreground)]">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={fields.message} onChange={handleChange}
                    placeholder="Tell us what you'd like to know..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="mb-4 rounded-lg bg-red-900/20 px-4 py-3 text-sm text-red-400">
                    Something went wrong. Please try calling us at{" "}
                    <a href="tel:+12294495609" className="font-semibold underline">
                      (229) 449-5609
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-[var(--accent)] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-dark)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
