"use client";

import {
  LuBold,
  LuItalic,
  LuList,
  LuListOrdered,
  LuStrikethrough,
  LuSubscript,
  LuSuperscript,
  LuUnderline,
} from "react-icons/lu";
import { useEditorStore } from "../store/useEditorState";
import { BubbleMenu } from "@tiptap/react";
import { cn } from "../lib/utils";

export function PopupMenu() {
  const { editor, editorOpts } = useEditorStore();

  if (!editor) return null;

  const buttons = [
    {
      label: "Bold",
      icon: LuBold,
      isActive: editor.isActive("bold"),
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: LuItalic,
      isActive: editor.isActive("italic"),
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: "Underline",
      icon: LuUnderline,
      isActive: editor.isActive("underline"),
      onClick: () => editor?.chain().focus().toggleUnderline().run(),
    },
    {
      label: "Strikethrough",
      icon: LuStrikethrough,
      isActive: editor.isActive("strike"),
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      label: "Superscript",
      icon: LuSuperscript,
      isActive: editor.isActive("superscript"),
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
    },
    {
      label: "Subscript",
      icon: LuSubscript,
      isActive: editor.isActive("subscript"),
      onClick: () => editor.chain().focus().toggleSubscript().run(),
    },
    {
      label: "Bullet List",
      icon: LuList,
      isActive: editor.isActive("bulletList"),
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Ordered List",
      icon: LuListOrdered,
      isActive: editor.isActive("orderedList"),
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ];

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div
        className="bubble-menu"
        style={{
          transform: `scale(${editorOpts.zoomLevel})`,
        }}
      >
        {buttons.map(({ label, icon: Icon, isActive, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className={cn("toolbar-button", isActive && "editor-item-active")}
            title={label}
          >
            <Icon size={13} />
          </button>
        ))}
      </div>
    </BubbleMenu>
  );
}
