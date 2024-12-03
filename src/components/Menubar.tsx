"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";
import { FaFilePdf } from "react-icons/fa";
import {
  LuBold,
  LuGlobe,
  LuItalic,
  LuPrinter,
  LuRedo2,
  LuRemoveFormatting,
  LuSave,
  LuStrikethrough,
  LuText,
  LuTextCursor,
  LuUnderline,
  LuUndo2,
  LuX,
} from "react-icons/lu";
import { TiExport } from "react-icons/ti";
import { BsFiletypeJson } from "react-icons/bs";
import { useEditorStore } from "../store/useEditorState";

type MenubarProps = {
  onSave?: (content: string | undefined) => void;
  onClose?: () => void;
};

export function MenuBar({ onSave, onClose }: MenubarProps) {
  const { editor } = useEditorStore();

  function insertTable(selected: number) {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows: selected, cols: selected, withHeaderRow: false })
      .run();
  }

  function onExport(blob: Blob, filename: string) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function onExportJSON() {
    if (!editor) return;

    const json = editor?.getJSON();
    const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
    onExport(blob, "document.json");
  }

  function onExportHTML() {
    if (!editor) return;

    const html = editor?.getHTML();
    const blob = new Blob([html], { type: "text/html" });
    onExport(blob, "document.html");
  }

  function onExportText() {
    if (!editor) return;

    const text = editor?.getText();
    const blob = new Blob([text], { type: "text/plain" });
    onExport(blob, "document.txt");
  }

  return (
    <div className="px-4">
      <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
        <MenubarMenu>
          <MenubarTrigger className="menu-trigger">File</MenubarTrigger>
          <MenubarContent className="print:hidden">
            <MenubarSub>
              <MenubarSubTrigger className="gap-2">
                <TiExport size={16} />
                Export as
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem className="gap-2" onClick={() => window.print()}>
                  <FaFilePdf size={16} />
                  PDF
                </MenubarItem>
                <MenubarItem className="gap-2" onClick={onExportHTML}>
                  <LuGlobe size={16} />
                  HTML
                </MenubarItem>
                <MenubarItem className="gap-2" onClick={onExportJSON}>
                  <BsFiletypeJson size={16} />
                  JSON
                </MenubarItem>
                <MenubarItem className="gap-2" onClick={onExportText}>
                  <LuTextCursor size={16} />
                  Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem className="gap-2" onClick={() => window.print()}>
              <LuPrinter size={16} />
              Print Document
            </MenubarItem>
            <MenubarItem
              className="gap-2"
              onClick={() => onSave?.(editor?.getHTML() || "")}
            >
              <LuSave size={16} />
              Save
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="gap-2" onClick={onClose}>
              <LuX size={16} />
              Close
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menu-trigger">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              className="gap-2"
              onClick={() => editor?.chain().focus().undo().run()}
            >
              <LuUndo2 size={16} />
              Undo
              <MenubarShortcut>Ctrl+Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              className="gap-2"
              onClick={() => editor?.chain().focus().redo().run()}
            >
              <LuRedo2 size={16} />
              Redo
              <MenubarShortcut>Ctrl+Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menu-trigger">Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Table</MenubarSubTrigger>
              <MenubarSubContent>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                  <MenubarItem
                    key={n}
                    onClick={() => insertTable(n)}
                  >{`${n} x ${n}`}</MenubarItem>
                ))}
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="menu-trigger">Format</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger className="gap-2">
                <LuText size={16} />
                Text
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  className="gap-2"
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <LuBold size={16} />
                  Bold
                  <MenubarShortcut>Ctrl+B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  className="gap-2"
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <LuItalic size={16} />
                  Italic
                  <MenubarShortcut>Ctrl+I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  className="gap-2"
                  onClick={() =>
                    editor?.chain().focus().toggleUnderline().run()
                  }
                >
                  <LuUnderline size={16} />
                  Underline
                  <MenubarShortcut>Ctrl+U</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  className="gap-2"
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                >
                  <LuStrikethrough size={16} />
                  Strikethrough &nbsp; &nbsp;
                  <MenubarShortcut>Ctrl+K</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem
              className="gap-2"
              onClick={() => editor?.chain().focus().unsetAllMarks().run()}
            >
              <LuRemoveFormatting size={16} />
              Clear Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
