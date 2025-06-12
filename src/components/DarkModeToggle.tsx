"use client";
import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="mt-4 px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 shadow bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
    >
      {enabled ? "☀️" : "🌙"}
    </button>
  );
};
