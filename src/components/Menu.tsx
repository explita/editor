"use client";

import { FiEdit } from "react-icons/fi";
import { useEditorStore } from "../store/useEditorState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CgMoreVerticalR } from "react-icons/cg";
import { Separator } from "./ui/separator";
import { LuGlobe, LuTextCursor, LuX } from "react-icons/lu";
import { BsFiletypeJson } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";

type Props = {
  onClose?: () => void;
  onCreateNew?: () => void;
};

export function Menu({ onClose, onCreateNew }: Props) {
  const { editor } = useEditorStore();

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button title="Menu" className="toolbar-button">
          <CgMoreVerticalR size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="editor-dropdown-content">
        <DropdownMenuItem onClick={onCreateNew}>
          <FiEdit size={16} />
          New Document
        </DropdownMenuItem>
        <Separator orientation="horizontal" className="separator" />
        <DropdownMenuItem
          className="gap-2"
          onClick={() => {
            if (
              confirm(
                `To export the document as a PDF, click the 'Print' button below, on the menubar or toolbar. Then, in the print dialog box that appears, select 'Save as PDF' and click 'Save' button to save the document.`
              )
            )
              window.print();
          }}
        >
          <FaFilePdf size={16} />
          Download PDF
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={onExportHTML}>
          <LuGlobe size={16} />
          Download HTML
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={onExportJSON}>
          <BsFiletypeJson size={16} />
          Download JSON
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={onExportText}>
          <LuTextCursor size={16} />
          Download Text
        </DropdownMenuItem>
        <Separator orientation="horizontal" className="separator" />
        <DropdownMenuItem className="gap-2" onClick={onClose}>
          <LuX size={16} />
          Close
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
