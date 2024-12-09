"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEditorStore } from "../store/useEditorState";
import { SketchPicker, type ColorResult } from "react-color";

export function TextColor() {
  const { editor } = useEditorStore();

  const currentColor = editor?.getAttributes("textStyle").color || "#000000";

  function onChage(color: ColorResult) {
    editor?.chain().focus().setColor(color.hex).run();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Text Color" className="toolbar-button">
          <span>A</span>
          <div
            className="h-0.5 w-full"
            style={{ backgroundColor: currentColor }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={currentColor} onChange={onChage} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
