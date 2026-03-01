import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-200";
  const styles = {
    primary: `${base} bg-[var(--accent)] text-white shadow-lg hover:bg-[var(--accent-dark)] hover:shadow-xl`,
    secondary: `${base} border-2 border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]`,
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}
