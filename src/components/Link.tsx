"use client";

import { useState } from "react";
import { useEditorStore } from "../store/useEditorState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LuCheck, LuLink2 } from "react-icons/lu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Link() {
  const { editor } = useEditorStore();
  const [current, setCurrent] = useState(
    editor?.getAttributes("link").href || ""
  );

  function onChange(href: string) {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setCurrent("");
  }

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setCurrent(editor?.getAttributes("link").href || "");
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button
          title="Add Link"
          className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center gap-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
        >
          <LuLink2 size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5 flex items-center gap-x-2">
        <Input
          placeholder="https://www.example.com"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <Button onClick={() => onChange(current)} size={"icon"}>
          <LuCheck />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
