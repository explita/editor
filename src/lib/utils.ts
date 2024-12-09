import { type Editor } from "@tiptap/react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import mammoth from "mammoth";
import { DEFAULT_MARGIN, PAGE_HEIGHT, PAGE_WIDTH } from "./constants";

export type ContentFormats = "text" | "json" | "html";
export type PagePadding = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type EditorOpts = {
  padding: Partial<PagePadding>;
  zoomLevel: number;
  editorHeight: string;
  editorWidth: string;
  containerHeight: string;
  containerWidth: string;
};

export const defaultEditorOpts: EditorOpts = {
  padding: {
    top: DEFAULT_MARGIN,
    right: DEFAULT_MARGIN,
    bottom: DEFAULT_MARGIN,
    left: DEFAULT_MARGIN,
  },
  zoomLevel: 1.0,
  editorHeight: `${PAGE_HEIGHT}px`,
  editorWidth: `${PAGE_WIDTH}px`,
  containerHeight: "100vh",
  containerWidth: "100%",
};

export function initializeEditor(userOpts?: Partial<EditorOpts>): EditorOpts {
  const mergedOpts: EditorOpts = {
    ...defaultEditorOpts,
    ...userOpts,
    padding: {
      ...defaultEditorOpts.padding,
      ...(userOpts?.padding || {}),
    },
    zoomLevel:
      parseFloat(
        Math.max(
          userOpts?.zoomLevel ?? defaultEditorOpts.zoomLevel,
          0.2
        ) as unknown as string
      ) || 1,
    editorWidth: userOpts?.editorWidth || defaultEditorOpts.editorWidth,
    editorHeight: userOpts?.editorHeight || defaultEditorOpts.editorHeight,
    containerWidth:
      userOpts?.containerWidth || defaultEditorOpts.containerWidth,
    containerHeight:
      userOpts?.containerHeight || defaultEditorOpts.containerHeight,
  };

  return mergedOpts;
}

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
