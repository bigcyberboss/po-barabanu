import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import TrackedLink from "./TrackedLink";

export default function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "rgba(20,20,22,0.5)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#0a0a0b" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" stroke="#0a0a0b" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="2" fill="#0a0a0b" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg">{SITE.name}</span>
            </div>
            <p className="text-muted text-sm max-w-xs mb-5">
              Научим играть на барабанах с нуля. Для детей и взрослых любого возраста.
            </p>
            <div className="flex items-center gap-2">
              {SITE.social.telegram && (
                <TrackedLink
                  href={SITE.social.telegram}
                  event="messenger_click"
                  eventParams={{ messenger: "telegram", source: "footer" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-primary transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                </TrackedLink>
              )}
              {SITE.social.instagram && (
                <TrackedLink
                  href={SITE.social.instagram}
                  event="messenger_click"
                  eventParams={{ messenger: "instagram", source: "footer" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-primary transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </TrackedLink>
              )}
            </div>
          </div>

          {/* Nav + Contacts in 2 sub-columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-semibold text-xs text-foreground mb-4 uppercase tracking-widest">
                Страницы
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-xs text-foreground mb-4 uppercase tracking-widest">
                Контакты
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-sm font-medium text-foreground">{SITE.address}</p>
                  <p className="text-xs text-muted">{SITE.parking}</p>
                </li>
                <li>
                  <TrackedLink
                    href={SITE.social.telegram}
                    event="messenger_click"
                    eventParams={{ messenger: "telegram", source: "footer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    @Maksz_1
                  </TrackedLink>
                </li>
                <li>
                  <TrackedLink
                    href={SITE.social.instagram}
                    event="messenger_click"
                    eventParams={{ messenger: "instagram", source: "footer" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="truncate">@po_barananu_drumschool</span>
                  </TrackedLink>
                </li>
                <li className="pt-1">
                  <p className="text-xs text-muted">Пн - Вс: по записи</p>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA column */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-xs text-foreground mb-3 uppercase tracking-widest">
                Начните сегодня
              </h3>
              <p className="text-sm text-muted mb-4">
                Пробный урок - <span className="text-primary font-bold">500 &#8381;</span>. Запишитесь и попробуйте барабаны уже на этой неделе.
              </p>
            </div>
            <TrackedLink
              href={SITE.social.telegram}
              event="messenger_click"
              eventParams={{ messenger: "telegram", source: "footer_cta" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-display font-bold text-sm hover:bg-primary-hover transition-colors w-full sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              Написать в Telegram
            </TrackedLink>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <a
            href="https://t.me/bigcyberboss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-primary transition-colors"
            style={{ opacity: 0.4 }}
          >
            Vibe coded by bigcyberboss
          </a>
        </div>
      </div>
    </footer>
  );
}
