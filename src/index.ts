import "./styles.css";
import { FullEditor } from "./components/Editor";
import { CompactEditor } from "./components/EditorInterface";
export { commands } from "./store/commands";
export { utils } from "./store/utils";

export type EditorOpts = Partial<import("./lib/utils").EditorOpts>;

/**
 * A collection of editor components.
 *
 * - `Full`: A full-featured, page-based editor with a toolbar and footer.
 * - `Compact`: A compact, inline editor with a popup menu.
 *
 * @example
 * ```tsx
 * import { Editor } from "@explita/editor";
 *
 * function App() {
 *   return (
 *     <div>
 *       <Editor.Full />
 *       <Editor.Compact />
 *     </div>
 *   );
 * }
 * ```
 */
export const Editor = {
  /**
   * FullEditor is a functional component that provides a full-featured editor interface
   * with a toolbar and footer.
   *
   * @param {object} props The properties of the component.
   * @param {boolean} props.readOnly Whether the editor is read-only or not.
   * @param {string | { editorContent: string, editorOpts: EditorOpts }} props.initialContent The content to be displayed in the editor.
   * @param {(text: string) => void} props.getTextContent A callback function to be called when the text content of the editor changes.
   * @param {(content: { editorOpts: EditorOpts, editorContent: JSONContent }) => void} props.getJSONContent A callback function to be called when the JSON content of the editor changes.
   * @param {(html: string) => void} props.getHTMLContent A callback function to be called when the HTML content of the editor changes.
   * @param {(content: string) => void} props.onSave A callback function to be called when the user saves the content of the editor.
   * @param {() => void} props.onClose A callback function to be called when the user closes the editor.
   * @param {() => void} props.onCreateNew A callback function to be called when the user creates a new document.
   * @param {React.ReactNode | string | null | undefined} props.toolbarRight A React node to be displayed on the right side of the toolbar.
   * @param {EditorOpts} props.editorOpts The options for the editor.
   * @param {(editorOpts: EditorOpts) => void} props.getEditorOpts A callback function to be called when the editor options change.
   * @param {boolean} props.hideToolbar Whether to hide the toolbar or not.
   * @param {boolean} props.hideFooter Whether to hide the footer or not.
   * @returns {ReactElement} The full-featured editor component.
   */
  Full: FullEditor,
  /**
   * CompactEditor is a functional component that provides a rich text editor interface
   * with various customization options for padding, dimensions, and toolbar visibility.
   *
   * Props:
   * - padding: string (default: "10px") - Sets the padding around the editor content.
   * - width: string (default: "100%") - Specifies the width of the editor container.
   * - height: string (default: "300px") - Specifies the height of the editor container.
   * - hideToolbar: boolean (default: false) - Determines whether the toolbar is hidden.
   * - initialContent: string | JSONContent - Initial content to load into the editor.
   * - name: string - Name attribute for the hidden input storing editor content.
   * - id: string - ID attribute for the hidden input storing editor content.
   * - outputType: "html" | "json" | "text" (default: "html") - Format of the editor output.
   * - onValueChange: function - Callback function triggered when the editor's content changes.
   *
   * The component utilizes useEditor from the editor library to create an editor instance
   * with specified extensions and configurations. It also manages the editor state and
   * provides a hidden input field for form submission.
   */
  Compact: CompactEditor,
};
