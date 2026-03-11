"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useBooking } from "./BookingProvider";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="sm:w-6 sm:h-6"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#0a0a0b"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  stroke="#0a0a0b"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="12" r="2" fill="#0a0a0b" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-foreground">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + contact */}
          <div className="hidden lg:flex items-center gap-4">
            {SITE.social.telegram && (
              <a
                href={SITE.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            )}
            <button
              onClick={openBooking}
              className="btn-cta px-6 py-2.5 text-sm"
            >
              Записаться
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 px-4">
              {SITE.social.telegram && (
                <a
                  href={SITE.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Telegram
                </a>
              )}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
                className="btn-cta w-full"
              >
                Записаться на урок
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
