"use client";

import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import { ImageResize } from "tiptap-extension-resize-image";
import { useEditorStore } from "../store/useEditorState";

import { Ruler } from "./Ruler";
import { FontSize } from "../extensions/font-size";
import { LineHeight } from "../extensions/line-height";
import { PageBreak } from "../extensions/page-break";
import { INCH_TO_PX } from "../lib/constants";
import { LuLoader } from "react-icons/lu";
import CharacterCount from "@tiptap/extension-character-count";
import { PopupMenu } from "./PopupMenu";
import { useEffect, useState } from "react";
import { Toolbar } from "./Toolbar";

export function EditorInterface() {
  const {
    setEditor,
    editorOpts: { padding, zoomLevel, editorHeight, editorWidth },
  } = useEditorStore();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onSelectionUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onTransaction: ({ editor }) => {
      setEditor(editor);
    },
    onFocus: ({ editor }) => {
      setEditor(editor);
    },
    onBlur: ({ editor }) => {
      setEditor(editor);
    },
    onContentError: ({ editor }) => {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left:${(padding.left || 0) * INCH_TO_PX}px;
        padding-right:${(padding.right || 0) * INCH_TO_PX}px; padding-top:${
          (padding.top || 0) * INCH_TO_PX
        }px;
        padding-bottom:${(padding.bottom || 0) * INCH_TO_PX}px;
        transform: scale(${zoomLevel}); transform-origin: top center;
        width: ${editorWidth}; min-height: ${editorHeight};
        `,
        class: "editor-content",
      },
    },
    extensions: [
      StarterKit,
      LineHeight.configure({
        types: ["paragraph", "heading"],
      }),
      FontSize,
      PageBreak,
      CharacterCount,
      BubbleMenu,
      Superscript,
      Subscript,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Color,
      FontFamily,
      Underline,
      ImageResize,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: "",
  });

  return (
    <>
      {editor === null ? (
        <div className="editor-loader" data-mini={false}>
          <LuLoader />
        </div>
      ) : (
        <main className="editor-content-wrapper" data-mini={false}>
          <Ruler key={editorWidth} />
          <PopupMenu />
          <EditorContent editor={editor} data-mini={false} />
        </main>
      )}
    </>
  );
}

/**
 * A compact version of the Editor component, suitable for inline editing.
 * Supports most features of the full editor, but with a smaller footprint.
 * @param {{
 *   padding?: string;
 *   width?: string;
 *   height?: string;
 *   hideToolbar?: boolean;
 *   readOnly?: boolean;
 *   initialContent?: string | JSONContent;
 *   name?: string;
 *   id?: string;
 *   outputType?: "html" | "json" | "text";
 *   onValueChange?: (value: string) => void;
 * }} props
 * @returns {JSX.Element}
 */
export function CompactEditor({
  padding = "10px",
  width = "100%",
  height = "300px",
  hideToolbar = false,
  readOnly = false,
  initialContent,
  name,
  id,
  outputType = "html",
  onValueChange,
}: CompactEditorProps) {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onSelectionUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onTransaction: ({ editor }) => {
      setEditor(editor);
    },
    onFocus: ({ editor }) => {
      setEditor(editor);
    },
    onBlur: ({ editor }) => {
      setEditor(editor);
    },
    onContentError: ({ editor }) => {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding:${padding};
        width: 100%; min-height: calc(${height} - 45px);
        `,
        class: "editor-content",
      },
    },
    extensions: [
      StarterKit,
      LineHeight.configure({
        types: ["paragraph", "heading"],
      }),
      FontSize,
      CharacterCount,
      BubbleMenu,
      Superscript,
      Subscript,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Color,
      FontFamily,
      Underline,
      ImageResize,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: "",
  });

  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    if (editor) {
      if (outputType === "html") {
        setOutput(editor.getHTML());
      } else if (outputType === "json") {
        setOutput(JSON.stringify(editor.getJSON()));
      } else if (outputType === "text") {
        setOutput(editor.getText());
      }
    }
  }, [editor?.getHTML(), editor?.getJSON(), editor?.getText(), outputType]);

  useEffect(() => {
    if (onValueChange) {
      setTimeout(() => {
        onValueChange(output);
      }, 200);
    }
  }, [output]);

  useEffect(() => {
    if (
      editor &&
      initialContent &&
      (typeof initialContent === "object" || typeof initialContent === "string")
    ) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(!readOnly);
    }
  }, [editor, readOnly]);

  return (
    <section
      className="explita-editor"
      data-mini={true}
      style={{ width: width, maxHeight: height }}
    >
      {editor === null ? (
        <div className="editor-loader" data-mini={true}>
          <LuLoader />
        </div>
      ) : (
        <>
          {!hideToolbar && (
            <header
              className="editor-header"
              data-mini={true}
              data-focused={editor?.isFocused}
            >
              <Toolbar isMini />
            </header>
          )}
          <main className="editor-content-wrapper" data-mini={true}>
            <EditorContent editor={editor} data-mini={true} />
            <input type="hidden" name={name} id={id} value={output} />
          </main>
        </>
      )}
    </section>
  );
}

type CompactEditorProps = {
  padding?: string;
  width?: string;
  height?: string;
  hideToolbar?: boolean;
  readOnly?: boolean;
  name?: string;
  id?: string;
  outputType?: "html" | "json" | "text";
  initialContent?: string | JSONContent;
  onValueChange?: (value: string) => void;
  setImage?: (src: string) => void;
};
