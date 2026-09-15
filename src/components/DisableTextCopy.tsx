"use client";

import { useEffect } from "react";

const EDITABLE = "input, textarea, select, [contenteditable='true']";

function isEditable(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest(EDITABLE));
}

export function DisableTextCopy() {
  useEffect(() => {
    document.body.classList.add("no-copy");

    const blockUnlessEditable = (e: Event) => {
      if (isEditable(e.target)) return;
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditable(e.target)) return;
      const key = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ["c", "x", "a"].includes(key)) {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", blockUnlessEditable);
    document.addEventListener("cut", blockUnlessEditable);
    document.addEventListener("selectstart", blockUnlessEditable);
    document.addEventListener("dragstart", blockUnlessEditable);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("no-copy");
      document.removeEventListener("copy", blockUnlessEditable);
      document.removeEventListener("cut", blockUnlessEditable);
      document.removeEventListener("selectstart", blockUnlessEditable);
      document.removeEventListener("dragstart", blockUnlessEditable);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
