import { type Editor } from "@tiptap/react";
import { create } from "zustand";
import { EditorOpts } from "../lib/utils";
import { DEFAULT_RULER_MARGIN } from "../lib/constants";

type EditorState = {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
  editorOpts: EditorOpts;
  setEditorOpts: (
    editorOpts: EditorOpts | ((prev: EditorOpts) => EditorOpts)
  ) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor: Editor | null) => set({ editor }),
  editorOpts: {
    padding: {
      top: DEFAULT_RULER_MARGIN,
      right: DEFAULT_RULER_MARGIN,
      bottom: DEFAULT_RULER_MARGIN,
      left: DEFAULT_RULER_MARGIN,
    },
  },
  setEditorOpts: (opts: EditorOpts | ((prev: EditorOpts) => EditorOpts)) =>
    set((state) => ({
      editorOpts:
        typeof opts === "function"
          ? (opts as (prev: EditorOpts) => EditorOpts)(state.editorOpts)
          : opts,
    })),
}));
