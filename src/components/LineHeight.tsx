"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEditorStore } from "../store/useEditorState";
import { LuFoldVertical } from "react-icons/lu";
import { lineHeights } from "../lib/constants";
import { cn } from "../lib/utils";

export function LineHeight() {
  const { editor } = useEditorStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Line Height" className="toolbar-button">
          <LuFoldVertical size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="editor-dropdown-content">
        {lineHeights.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
            className={cn(
              "editor-dropdown-menu-button",
              editor?.getAttributes("paragraph").lineHeight === value &&
                "editor-item-active"
            )}
          >
            <span>{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
