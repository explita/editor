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
        <button
          title="Text Alignment"
          className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center gap-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
        >
          <LuAlignLeft size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {textAlignment.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.isActive({ textAlignment: value }) && "bg-neutral-200/80"
            )}
          >
            <Icon size={16} />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
