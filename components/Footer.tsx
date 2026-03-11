import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
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
            <p className="text-muted text-sm max-w-xs">
              {SITE.description}. Для детей и взрослых любого возраста.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
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

          {/* Contacts */}
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{SITE.address}<br />{SITE.parking}</span>
              </li>
              {SITE.social.telegram && (
                <li>
                  <a
                    href={SITE.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                    Telegram
                  </a>
                </li>
              )}
              {SITE.social.instagram && (
                <li>
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Schedule placeholder */}
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4">
              Режим работы
            </h3>
            <p className="text-sm text-muted">
              Пн — Вс: по записи
            </p>
            <p className="text-sm text-muted mt-2">
              Запишитесь на удобное для вас время
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. Все права защищены.
          </p>
          <p className="text-xs text-muted">
            {SITE.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
