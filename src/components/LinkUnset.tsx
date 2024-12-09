"use client";

import { useEditorStore } from "../store/useEditorState";
import { LuLink2Off } from "react-icons/lu";

export function LinkUnset() {
  const { editor } = useEditorStore();

  const currentLink = editor?.getAttributes("link").href || "";

  function onClick() {
    if (currentLink) {
      editor?.chain().focus().unsetLink().run();
    }
  }

  return (
    <button
      title="Remove Link"
      className="toolbar-button"
      onClick={onClick}
      disabled={currentLink === ""}
    >
      <LuLink2Off size={16} />
    </button>
  );
}
