import React from "react";
import { parseWordDocument } from "../lib/utils";
import { useEditorStore } from "../store/useEditorState";
import { FaRegFileWord } from "react-icons/fa";

export function WordImport() {
  const { editor } = useEditorStore();

  if (!editor) {
    return null;
  }

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const htmlContent = await parseWordDocument(file);
      editor.chain().focus().setContent(htmlContent).run();
    } catch (error) {
      alert("Failed to import Word document. Please try again.");
    }
  };

  return (
    <button
      type="button"
      className={"toolbar-button"}
      title={'Import "Word" document'}
    >
      <label className="cursor-pointer">
        <FaRegFileWord size={16} />

        <input
          type="file"
          accept=".docx"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </label>
    </button>
  );
}
