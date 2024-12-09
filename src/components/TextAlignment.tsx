"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEditorStore } from "../store/useEditorState";
import { LuAlignLeft } from "react-icons/lu";
import { textAlignment } from "../lib/constants";
import { cn } from "../lib/utils";

export function TextAlignment() {
  const { editor } = useEditorStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Text Alignment" className="toolbar-button">
          <LuAlignLeft size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="editor-dropdown-content">
        {textAlignment.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "editor-dropdown-menu-button",
              editor?.isActive({ textAlignment: value }) && "editor-item-active"
            )}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
