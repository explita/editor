import { type Editor } from "@tiptap/react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import mammoth from "mammoth";

export type ContentFormats = "text" | "json" | "html";
export type PagePadding = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type EditorOpts = {
  padding: PagePadding;
  zoomLevel: number;
};

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

export async function parseWordDocument(file: File) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const { value: html, messages } = await mammoth.convertToHtml({
      arrayBuffer,
    });
    console.log("Parsing messages:", messages); // Logs warnings about unsupported content
    return html;
  } catch (error) {
    console.error("Error parsing Word document:", error);
    throw new Error(
      "Failed to parse the Word document, make sure you only import .docx files."
    );
  }
}
