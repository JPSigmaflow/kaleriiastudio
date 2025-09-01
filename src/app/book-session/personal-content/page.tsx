"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { X } from "lucide-react";

export default function PersonalContentBookingPage() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "personal-content" } as { namespace: string });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: { light: { "cal-brand": "#5b6854" }, dark: { "cal-brand": "#5b6854" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch {
        // no-op
      }
    })();
  }, []);

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="w-full">
        <Cal
          namespace="personal-content"
          calLink="kaleriiastudio/personal-content"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>

      <Link
        href="/book-session"
        aria-label="Back to packages"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white hover:opacity-90 transition-opacity bg-primary rounded-full w-12 h-12 flex items-center justify-center shadow-xl pointer-events-auto"
        style={{ zIndex: 2147483647, WebkitTapHighlightColor: "transparent" }}
      >
        <X className="w-6 h-6" />
      </Link>
    </div>
  );
}


