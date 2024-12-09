import { type Editor } from "@tiptap/react";
import { create } from "zustand";
import { defaultEditorOpts, EditorOpts, initializeEditor } from "../lib/utils";
import { DEFAULT_MARGIN } from "../lib/constants";

type EditorState = {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
  editorOpts: EditorOpts;
  setEditorOpts: (
    editorOpts: Partial<EditorOpts> | ((prev: EditorOpts) => EditorOpts)
  ) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor: Editor | null) => set({ editor }),
  editorOpts: defaultEditorOpts,
  setEditorOpts: (
    opts: Partial<EditorOpts> | ((prev: EditorOpts) => EditorOpts)
  ) =>
    set((state) => ({
      editorOpts:
        typeof opts === "function"
          ? (opts as (prev: EditorOpts) => EditorOpts)(state.editorOpts)
          : initializeEditor(opts),
    })),
}));
