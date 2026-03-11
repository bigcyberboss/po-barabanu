"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { METRICA_ID, hit } from "@/lib/metrica";

export default function YandexMetrica() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Отправляем хит при каждом SPA-переходе
  useEffect(() => {
    if (!METRICA_ID) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    hit(url);
  }, [pathname, searchParams]);

  if (!METRICA_ID) return null;

  return (
    <Script id="yandex-metrica" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

        ym(${METRICA_ID}, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true
        });
      `}
    </Script>
  );
}
