import { useEditorStore } from "./useEditorState";

/**
 * Sets an image in the editor with the specified source and optional attributes.
 *
 * @param {string} src - The source URL of the image.
 * @param {Object} [opts] - Optional attributes for the image.
 * @param {string} [opts.alt] - Alternative text for the image.
 * @param {string} [opts.title] - Title for the image.
 */
function setImage(src: string, opts?: { alt?: string; title?: string }) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run setImage, but editor is not ready.");
    return;
  }

  editor
    .chain()
    .focus()
    .setImage({ src, ...opts })
    .run();
}

/**
 * Undoes the last action in the editor.
 */
function undo() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run undo, but editor is not ready.");
    return;
  }

  editor.chain().focus().undo().run();
}

/**
 * Redoes the last undone action in the editor.
 */
function redo() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run redo, but editor is not ready.");
    return;
  }

  editor.chain().focus().redo().run();
}

/**
 * Toggles bold formatting for the selected text in the editor.
 */
function toggleBold() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run toggleBold, but editor is not ready.");
    return;
  }

  editor.chain().focus().toggleBold().run();
}

/**
 * Toggles italic formatting for the selected text in the editor.
 */
function toggleItalic() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run toggleItalic, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().toggleItalic().run();
}

/**
 * Toggles underline formatting for the selected text in the editor.
 */
function toggleUnderline() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run toggleUnderline, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().toggleUnderline().run();
}

/**
 * Toggles strikethrough formatting for the selected text in the editor.
 */
function toggleStrikethrough() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run toggleStrikethrough, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().toggleStrike().run();
}

/**
 * Toggles superscript formatting for the selected text in the editor.
 */
function toggleSuperscript() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run toggleSuperscript, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().toggleSuperscript().run();
}

/**
 * Toggles subscript formatting for the selected text in the editor.
 */
function toggleSubscript() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run toggleSubscript, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().toggleSubscript().run();
}

/**
 * Toggles todo list formatting for the selected text in the editor.
 */
function toggleTodoList() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run toggleTodoList, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().toggleTaskList().run();
}

/**
 * Clears all formatting from the selected text in the editor.
 */
function clearFormatting() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run clearFormatting, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().unsetAllMarks().run();
}

/**
 * Inserts a horizontal rule at the current cursor position in the editor.
 */
function insertHorizontalRule() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run insertHorizontalRule, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().setHorizontalRule().run();
}

/**
 * Sets the font family for the selected text in the editor.
 *
 * @param {string} fontFamily - The font family to apply.
 */
function setFontFamily(fontFamily: string) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run setFontFamily, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().setFontFamily(fontFamily).run();
}

/**
 * Sets the font size for the selected text in the editor.
 *
 * @param {string} newSize - The new font size to apply.
 */
function setFontSize(newSize: string) {
  const size = parseInt(newSize);

  if (!isNaN(size) && size > 0) {
    const editor = useEditorStore.getState().editor;

    if (!editor) {
      console.warn(
        "[editor] Tried to run setFontSize, but editor is not ready."
      );
      return;
    }

    editor.chain().focus().setFontSize(`${size}px`).run();
  }
}

/**
 * Sets the line height for the selected text in the editor.
 *
 * @param {string} lineHeight - The new line height to apply.
 */
function setLineHeight(lineHeight: string) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run setLineHeight, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().setLineHeight(lineHeight).run();
}

/**
 * Sets the text color for the selected text in the editor.
 *
 * @param {string} color - The new text color to apply.
 */
function setTextColor(color: string) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run setTextColor, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().setColor(color).run();
}

/**
 * Sets the highlight color for the selected text in the editor.
 *
 * @param {string} color - The new highlight color to apply.
 */
function setHighlightColor(color: string) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run setHighlightColor, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().setHighlight({ color }).run();
}

/**
 * Sets the text alignment for the selected text in the editor.
 *
 * @param {string} value - The new text alignment to apply.
 */
function setTextAlign(value: "left" | "center" | "justify" | "right") {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn(
      "[editor] Tried to run setTextAlign, but editor is not ready."
    );
    return;
  }

  editor.chain().focus().setTextAlign(value).run();
}

/**
 * Sets a link for the selected text in the editor.
 *
 * @param {Object} attributes - The attributes for the link.
 * @param {string} attributes.href - The URL of the link.
 * @param {string} [attributes.target] - The target attribute for the link.
 * @param {string} [attributes.rel] - The rel attribute for the link.
 * @param {string} [attributes.class] - The class attribute for the link.
 */
function setLink(attributes: {
  href: string;
  target?: string | null;
  rel?: string | null;
  class?: string | null;
}) {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run setLink, but editor is not ready.");
    return;
  }

  editor.chain().focus().extendMarkRange("link").setLink(attributes).run();
}

/**
 * Removes the link from the selected text in the editor.
 */
function unsetLink() {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run unsetLink, but editor is not ready.");
    return;
  }

  editor.chain().focus().unsetLink().run();
}

/**
 * Inserts a list of the specified type at the current cursor position in the editor.
 *
 * @param {string} type - The type of list to insert. Can be "bullet" or "ordered".
 */
function insertList(type: "bullet" | "ordered") {
  const editor = useEditorStore.getState().editor;

  if (!editor) {
    console.warn("[editor] Tried to run insertList, but editor is not ready.");
    return;
  }

  if (type === "bullet") {
    editor.chain().focus().toggleBulletList().run();
  } else if (type === "ordered") {
    editor.chain().focus().toggleOrderedList().run();
  }
}

/**
 * A collection of commands that can be executed on the editor.
 *
 * The commands are:
 *
 * - setImage: Sets the image at the current cursor position.
 * - undo: Undoes the last action.
 * - redo: Redoes the last undone action.
 * - toggleBold: Toggles bold formatting on or off.
 * - toggleItalic: Toggles italic formatting on or off.
 * - toggleUnderline: Toggles underline formatting on or off.
 * - toggleStrikethrough: Toggles strikethrough formatting on or off.
 * - toggleSuperscript: Toggles superscript formatting on or off.
 * - toggleSubscript: Toggles subscript formatting on or off.
 * - toggleTodoList: Toggles todo list formatting on or off.
 * - clearFormatting: Clears all formatting from the current selection.
 * - insertHorizontalRule: Inserts a horizontal rule at the current cursor position.
 * - setFontFamily: Sets the font family for the current selection.
 * - setFontSize: Sets the font size for the current selection.
 * - setLineHeight: Sets the line height for the current selection.
 * - setTextColor: Sets the text color for the current selection.
 * - setHighlightColor: Sets the highlight color for the current selection.
 * - setTextAlign: Sets the text alignment for the current selection.
 * - setLink: Sets a link for the current selection.
 * - unsetLink: Removes any existing link from the current selection.
 * - insertList: Inserts a list of the specified type at the current cursor position.
 */
export const commands = {
  setImage,
  undo,
  redo,
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleStrikethrough,
  toggleSuperscript,
  toggleSubscript,
  toggleTodoList,
  clearFormatting,
  insertHorizontalRule,
  setFontFamily,
  setFontSize,
  setLineHeight,
  setTextColor,
  setHighlightColor,
  setTextAlign,
  setLink,
  unsetLink,
  insertList,
};
