import { JSONContent } from "@tiptap/react";
import { useEditorStore } from "./useEditorState";

/**
 * Checks if the specified mark or node is active in the editor.
 *
 * @param {string} name - The name of the mark or node to check.
 * @param {Object} [attributes] - Optional attributes to check for the mark or node.
 * @returns {boolean} - Returns true if the mark or node is active, false otherwise.
 */
function isActive(name: string, attributes?: {}) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run isActive, but editor is not ready.");
    return false;
  }

  return editor.isActive(name, attributes);
}

/**
 * Sets the content of the editor.
 *
 * @param {string | JSONContent} content - The content to set in the editor.
 * It can be a string or a JSONContent object.
 */
function setEditorContent(content: string | JSONContent) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run setEditorContent, but editor is not ready."
    );
    return;
  }

  editor.commands.setContent(content);
}

function getEditorContent(type: "html"): string;
function getEditorContent(type: "text"): string;
function getEditorContent(type: "json"): JSONContent;
/**
 * Gets the content of the editor as a string in one of three formats: HTML, JSON, or plain text.
 *
 * @param {string} [type] - The format of the content to retrieve. Can be "html", "json", or "text". Defaults to "text".
 * @returns {string} - The content of the editor as a string in the specified format.
 */
function getEditorContent(type?: "html" | "json" | "text") {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run getEditorContent, but editor is not ready."
    );
    return "";
  }

  if (type === "html") {
    return editor.getHTML();
  }

  if (type === "json") {
    return editor.getJSON();
  }

  return editor.getText();
}

/**
 * Clears all content from the editor.
 */
function clearEditorContent() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run clearEditorContent, but editor is not ready."
    );
    return;
  }

  editor.commands.clearContent();
}

/**
 * Checks if the editor is empty.
 *
 * @returns {boolean} - Returns true if the editor is empty, false otherwise.
 */
function isEditorEmpty() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run isEditorEmpty, but editor is not ready."
    );
    return false;
  }

  return editor.isEmpty;
}

/**
 * Gets the word count from the editor.
 *
 * @returns {number} - The word count from the editor.
 */
function getWordCount() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run getWordCount, but editor is not ready."
    );
    return 0;
  }

  return editor.storage.characterCount.words() || 0;
}

export const utils = {
  isActive,
  setEditorContent,
  getEditorContent,
  clearEditorContent,
  isEditorEmpty,
  getWordCount,
};
