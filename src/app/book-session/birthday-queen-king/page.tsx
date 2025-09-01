"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BirthdayQueenKing() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "birthday-queen-king-photoshoot" } as { namespace: string });
      cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="birthday-queen-king-photoshoot"
      calLink="kaleriiastudio/birthday-queen-king-photoshoot"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}


