"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEditorStore } from "../store/useEditorState";
import { LuList, LuListOrdered } from "react-icons/lu";
import { cn } from "../lib/utils";

export function List() {
  const { editor } = useEditorStore();

  const lists = [
    {
      label: "Bullet List",
      icon: LuList,
      isActive: () => editor?.isActive("bulletList"),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Ordered List",
      icon: LuListOrdered,
      isActive: () => editor?.isActive("orderedList"),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="List" className="toolbar-button">
          <LuList size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="editor-dropdown-content">
        {lists.map(({ label, icon: Icon, onClick, isActive }) => (
          <button
            key={label}
            onClick={onClick}
            className={cn(
              "editor-dropdown-menu-button",
              isActive() && "editor-item-active"
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
