"use client";

import { useEffect } from "react";

export default function AdobeFonts() {
  useEffect(() => {
    // Load Adobe Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/hvp8zrm.css";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    // Wait for fonts to load
    const loadFonts = async () => {
      try {
        await document.fonts.ready;
        console.log("Adobe Fonts loaded successfully");
        console.log("Available fonts:", Array.from(document.fonts).map(f => f.family));
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    loadFonts();

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return null;
}
