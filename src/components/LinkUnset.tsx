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
      className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center gap-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm disabled:text-gray-400"
      onClick={onClick}
      disabled={currentLink === ""}
    >
      <LuLink2Off size={16} />
    </button>
  );
}
