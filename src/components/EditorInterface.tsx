"use client";

import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
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
        <div className="editor-loader">
          <LuLoader />
        </div>
      ) : (
        <main className="editor-content-wrapper">
          <Ruler key={editorWidth} />
          <PopupMenu />
          <EditorContent editor={editor} />
        </main>
      )}
    </>
  );
}
