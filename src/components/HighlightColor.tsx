"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEditorStore } from "../store/useEditorState";
import { SketchPicker, type ColorResult } from "react-color";
import { LuHighlighter } from "react-icons/lu";

export function HighlightColor() {
  const { editor } = useEditorStore();

  const currentColor = editor?.getAttributes("highlight").color || "#C7C7C7";

  function onChage(color: ColorResult) {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Highlight Color" className="toolbar-button">
          <LuHighlighter size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={currentColor} onChange={onChage} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
