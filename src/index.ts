import "./styles.css";
import { FullEditor } from "./components/Editor";
import { CompactEditor } from "./components/EditorInterface";
export type EditorOpts = Partial<import("./lib/utils").EditorOpts>;

export const Editor = {
  Full: FullEditor,
  Compact: CompactEditor,
};
