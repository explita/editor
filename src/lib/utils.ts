import { type Editor } from "@tiptap/react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type ContentFormats = "text" | "json" | "html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function measureHeight(element: Node): number {
  if (!(element instanceof HTMLElement)) {
    return 0;
  }

  const computedStyle = window.getComputedStyle(element);

  return (
    element.offsetHeight +
    parseFloat(computedStyle.marginTop) +
    parseFloat(computedStyle.marginBottom)
  );
}

export function onSave(editor: Editor | null, format: ContentFormats = "html") {
  if (!editor) return;

  if (format === "html") return editor.getHTML();

  if (format === "json") return editor.getJSON();

  if (format === "text") return editor.getText();
}
