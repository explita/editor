"use client";

import { useEffect } from "react";
import { JSONContent } from "@tiptap/react";
import { EditorInterface } from "./EditorInterface";
import { Toolbar } from "./Toolbar";
import { MenuBar } from "./Menubar";

import { useEditorStore } from "../store/useEditorState";
import "../styles.css";

type EditorProps = {
  initialContent?: string | JSONContent | undefined;
  getTextContent?: (text: string) => void;
  getJSONContent?: (json: JSONContent) => void;
  getHTMLContent?: (html: string) => void;
  onSave?: (content: string | undefined) => void;
  onClose?: () => void;
};

export function Editor({
  initialContent,
  getTextContent,
  getJSONContent,
  getHTMLContent,
  onSave,
  onClose,
}: EditorProps) {
  const { editor } = useEditorStore();

  useEffect(() => {
    if (editor && initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);

  useEffect(() => {
    if (getTextContent) {
      getTextContent(editor?.getText() || "");
    }

    if (getJSONContent) {
      getJSONContent(editor?.getJSON() || {});
    }

    if (getHTMLContent) {
      getHTMLContent(editor?.getHTML() || "");
    }
  }, [editor?.getText(), editor?.getJSON(), editor?.getHTML(), getTextContent]);

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden">
        <MenuBar onSave={onSave} onClose={onClose} />
        <Toolbar onSave={onSave} />
      </div>
      <div className="pt-[80px] print:pt-0">
        <EditorInterface />
      </div>
    </div>
  );
}

Editor.defaultProps = {
  getHTMLContent: () => {},
  getJSONContent: () => {},
  getTextContent: () => {},
  onClose: () => {},
  onSave: () => {},
};
