"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  pulse?: boolean;
  size?: "md" | "lg";
  className?: string;
  href?: string;
}

export default function CTAButton({
  children,
  onClick,
  variant = "primary",
  pulse = false,
  size = "lg",
  className = "",
  href,
}: CTAButtonProps) {
  const base =
    variant === "primary"
      ? pulse
        ? "btn-cta-pulse"
        : "btn-cta"
      : "btn-secondary";

  const sizeClass = size === "md" ? "px-6 py-3 text-base" : "";

  const classes = `${base} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
