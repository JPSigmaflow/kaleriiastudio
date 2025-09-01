"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MaternityGlow() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "maternity-glow-photoshoot" } as { namespace: string });
      cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="maternity-glow-photoshoot"
      calLink="kaleriiastudio/maternity-glow-photoshoot"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}


