"use client";

import { IconType } from "react-icons";
import { cn } from "../lib/utils";
import {
  LuBold,
  LuItalic,
  LuListTodo,
  LuPrinter,
  LuRedo2,
  LuRemoveFormatting,
  LuSave,
  LuSpellCheck,
  LuStrikethrough,
  LuSubscript,
  LuSuperscript,
  LuUnderline,
  LuUndo2,
} from "react-icons/lu";
import { GoHorizontalRule } from "react-icons/go";
import { ImPageBreak } from "react-icons/im";
import { Separator } from "./ui/separator";
import { FontFamily } from "./FontFamily";
import { Heading } from "./Heading";
import { TextColor } from "./TextColor";
import { useEditorStore } from "../store/useEditorState";
import { HighlightColor } from "./HighlightColor";
import { Link } from "./Link";
import { LinkUnset } from "./LinkUnset";
import { Image } from "./Image";
import { TextAlignment } from "./TextAlignment";
import { List } from "./List";
import { FontSize } from "./FontSize";
import { LineHeight } from "./LineHeight";

type ToolbarProps = {
  onSave?: (content: string | undefined) => void;
};

type ToolbarButtonProps = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  icon: IconType;
};

function ToolbarButton({
  label,
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
      title={label}
    >
      <Icon size={16} />
    </button>
  );
}

export function Toolbar({ onSave }: ToolbarProps) {
  const { editor } = useEditorStore();

  const sections: ToolbarButtonProps[][] = [
    [
      {
        label: "Undo",
        icon: LuUndo2,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: LuRedo2,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Save",
        icon: LuSave,
        onClick: () => onSave?.(editor?.getHTML()),
      },
      {
        label: "Print",
        icon: LuPrinter,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: LuSpellCheck,
        isActive: editor?.view.dom.getAttribute("spellcheck") === "true",
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");

          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "true" ? "false" : "true"
          );

          editor?.chain().focus().run();
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: LuBold,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: LuItalic,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: LuUnderline,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
      {
        label: "Strikethrough",
        icon: LuStrikethrough,
        isActive: editor?.isActive("strike"),
        onClick: () => editor?.chain().focus().toggleStrike().run(),
      },
      {
        label: "Superscript",
        icon: LuSuperscript,
        isActive: editor?.isActive("superscript"),
        onClick: () => editor?.chain().focus().toggleSuperscript().run(),
      },
      {
        label: "Subscript",
        icon: LuSubscript,
        isActive: editor?.isActive("subscript"),
        onClick: () => editor?.chain().focus().toggleSubscript().run(),
      },
      {
        label: "Horizontal Rule",
        icon: GoHorizontalRule,
        onClick: () => editor?.chain().focus().setHorizontalRule().run(),
      },
    ],
    [
      {
        label: "Todo List",
        icon: LuListTodo,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Clear Formatting",
        icon: LuRemoveFormatting,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
      {
        label: "Inser Page Break",
        icon: ImPageBreak,
        onClick: () => editor?.commands.insertPageBreak(),
      },
      // {
      //   label: "Comment",
      //   icon: LuMessageSquare,
      //   onClick: () => console.log("comment clicked"),
      // },
    ],
  ];

  return (
    <div className="flex items-center gap-x-0.5 bg-[#F1F4F9] px-4 rounded-[0px] min-h-[40px] overflow-x-auto">
      {sections[0].map((section) => (
        <ToolbarButton key={section.label} {...section} />
      ))}
      <Separator className="h-6 bg-neutral-300" />
      <FontFamily />
      <Separator className="h-6 bg-neutral-300" />
      <FontSize />
      <Separator className="h-6 bg-neutral-300" />
      <Heading />
      <Separator className="h-6 bg-neutral-300" />
      {sections[1].map((section) => (
        <ToolbarButton key={section.label} {...section} />
      ))}
      <TextColor />
      <HighlightColor />
      <Separator className="h-6 bg-neutral-300" />
      <Link />
      <LinkUnset />
      <Image />
      <TextAlignment />
      <LineHeight />
      <List />
      <Separator className="h-6 bg-neutral-300" />
      {sections[2].map((section) => (
        <ToolbarButton key={section.label} {...section} />
      ))}
    </div>
  );
}
