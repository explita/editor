"use client";

import { useEffect } from "react";
import { JSONContent } from "@tiptap/react";
import { EditorInterface } from "./EditorInterface";
import { Toolbar } from "./Toolbar";

import { useEditorStore } from "../store/useEditorState";
import "../styles.css";
import { EditorOpts } from "../lib/utils";
import { Footer } from "./Footer";

type InitialContent = {
  editorOpts?: EditorOpts | undefined;
  editorContent?: string | JSONContent;
};

type EditorProps = {
  readOnly?: boolean;
  initialContent?: InitialContent | string;
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
  hideFooter?: boolean;
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
  hideFooter = false,
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
  }, [editorOptions, getEditorOpts, editor?.getHTML()]);

  useEffect(() => {
    if (editor && editorOpts) {
      setEditorOpts(editorOpts);
    }
  }, [editor, editorOpts]);

  useEffect(() => {
    if (editor && initialContent) {
      if (typeof initialContent === "object") {
        const { editorContent, editorOpts } = initialContent;

        if (editorOpts && Object.keys(editorOpts).length > 0) {
          setEditorOpts(editorOpts);
        }

        if (editorContent) {
          editor.commands.setContent(editorContent);
        }
      } else if (typeof initialContent === "string") {
        editor.commands.setContent(initialContent);
      }
    }
  }, [editor, initialContent]);

  useEffect(() => {
    if (getTextContent) {
      getTextContent(editor?.getText() || "");
    }

    if (getJSONContent) {
      getJSONContent({
        editorOpts: editorOptions,
        editorContent: editor?.getJSON(),
      });
    }

    if (getHTMLContent) {
      getHTMLContent(editor?.getHTML() || "");
    }
  }, [editor?.getText(), editor?.getJSON(), editor?.getHTML(), getTextContent]);

  return (
    <section className="explita-editor">
      {!hideToolbar && (
        <header className="editor-header">
          {!hideToolbar && (
            <Toolbar
              onCreateNew={onCreateNew}
              onSave={onSave}
              onClose={onClose}
              toolbarRight={toolbarRight}
            />
          )}
        </header>
      )}

      <EditorInterface />

      {!hideFooter && <Footer />}
    </section>
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
  getEditorOpts: () => {},
  editorOpts: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
  hideToolbar: false,
  hideFooter: false,
};
