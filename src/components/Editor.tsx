"use client";

import { useEffect } from "react";
import { JSONContent } from "@tiptap/react";
import { EditorInterface } from "./EditorInterface";
import { Toolbar } from "./Toolbar";
import { MenuBar } from "./Menubar";

import { useEditorStore } from "../store/useEditorState";
import "../styles.css";
import { PagePadding } from "../lib/utils";

type EditorOpts = { padding: PagePadding };

type EditorProps = {
  readOnly?: boolean;
  initialContent?: string | JSONContent | undefined;
  getTextContent?: (text: string) => void;
  getJSONContent?: (json: JSONContent) => void;
  getHTMLContent?: (html: string) => void;
  onSave?: (content: string) => void;
  onClose?: () => void;
  onCreateNew?: () => void;
  toolbarRight?: React.ReactNode | string | null | undefined;
  editorOpts?: EditorOpts;
  getEditorOpts?: (editorOpts: EditorOpts) => void;
  hideToolbar?: boolean;
  hideMenubar?: boolean;
};

export function Editor({
  readOnly = false,
  initialContent,
  getTextContent,
  getJSONContent,
  getHTMLContent,
  onSave,
  onClose,
  onCreateNew,
  toolbarRight,
  editorOpts,
  getEditorOpts,
  hideToolbar = false,
  hideMenubar = false,
}: EditorProps) {
  const { editor, editorOpts: editorOptions, setEditorOpts } = useEditorStore();

  useEffect(() => {
    if (editor) {
      editor.setEditable(!readOnly);
    }
  }, [editor, readOnly]);

  useEffect(() => {
    if (editor && getEditorOpts) {
      getEditorOpts(editorOptions);
    }
  }, [editorOptions, getEditorOpts]);

  useEffect(() => {
    if (editor && editorOpts) {
      setEditorOpts(editorOpts);
    }
  }, [editor, editorOpts]);

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
      {(!hideMenubar || !hideToolbar) && (
        <div className="flex flex-col pt-2 gap-y-2 sticky top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden text-slate-700">
          {!hideMenubar && (
            <MenuBar
              onSave={onSave}
              onClose={onClose}
              onCreateNew={onCreateNew}
            />
          )}
          {!hideToolbar && (
            <Toolbar onSave={onSave} toolbarRight={toolbarRight} />
          )}
        </div>
      )}
      <div className="print:pt-0">
        <EditorInterface />
      </div>
    </div>
  );
}

Editor.defaultProps = {
  initialContent: "",
  readOnly: false,
  toolbarRight: null,
  getHTMLContent: () => {},
  getJSONContent: () => {},
  getTextContent: () => {},
  onClose: () => {},
  onSave: () => {},
  onCreateNew: () => {},
  getEditorOpts: () => {
    return { padding: { top: 0, bottom: 0, left: 0, right: 0 } };
  },
  editorOpts: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
  hideToolbar: false,
  hideMenubar: false,
};
