import { useEffect, useState } from "react";
import { useEditorStore } from "../store/useEditorState";
import { Separator } from "./ui/separator";
import { Editor } from "@tiptap/react";
import { PAGE_HEIGHT } from "../lib/constants";
import { KeyboardShortcut } from "./KeyboardShortcut";
import { RiFullscreenExitLine, RiFullscreenFill } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu";

export function Footer() {
  return (
    <footer>
      <div className="flex items-center gap-2">
        <Chars />
        <Words />
        <Pages />
        <Selected />
      </div>
      <div className="flex items-center gap-2">
        <EditorZoom />
        <FullScreen />
        <KeyboardShortcut />
      </div>
    </footer>
  );
}

function Words() {
  const { editor } = useEditorStore();
  const words = editor?.storage.characterCount.words() || 0;

  return (
    <>
      <p>{words?.toLocaleString()} words</p>
      <Separator orientation="vertical" className="bg-neutral-200 h-6" />
    </>
  );
}

function Chars() {
  const { editor } = useEditorStore();
  const characters = editor?.storage.characterCount.characters() || 0;

  return (
    <>
      <p>{characters?.toLocaleString()} characters</p>

      <Separator orientation="vertical" className="bg-neutral-200 h-6" />
    </>
  );
}

function Pages() {
  const { editor } = useEditorStore();

  const [editorHeight, setEditorHeight] = useState(0);

  useEffect(() => {
    if (editor) {
      const editorContainer = document.getElementsByClassName("tiptap");

      if (editorContainer.length > 0) {
        const element = editorContainer[0] as HTMLElement;

        const height = element.offsetHeight;
        setEditorHeight(height);
      }
    }
  }, [editor?.getHTML()]);

  return (
    <>
      <p>
        {Math.ceil(editorHeight / PAGE_HEIGHT)}
        {editorHeight > PAGE_HEIGHT ? " pages" : " page"}
      </p>
      <Separator orientation="vertical" className="bg-neutral-200 h-6" />
    </>
  );
}

function Selected() {
  const { editor } = useEditorStore();

  return (
    <>
      <p>Selected: {countSelectedText(editor)}</p>
    </>
  );
}

function countSelectedText(editor: Editor | null): number {
  if (!editor) return 0;

  const { from, to } = editor.state.selection;
  const selectedText = editor.state.doc.textBetween(from, to, " ");

  return selectedText.trim().length;
}

function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  useEffect(() => {
    function handleFullScreenChange() {
      setIsFullScreen(!!document.fullscreenElement);
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <button onClick={toggleFullScreen}>
      {isFullScreen ? (
        <RiFullscreenExitLine size={16} title="Exit Fullscreen" />
      ) : (
        <RiFullscreenFill size={16} title="Enter Fullscreen" />
      )}
    </button>
  );
}

function EditorZoom() {
  const {
    editorOpts: { zoomLevel },
    setEditorOpts,
  } = useEditorStore();

  const handleZoomIn = () =>
    setEditorOpts((prev) => ({ ...prev, zoomLevel: prev.zoomLevel + 0.1 }));
  const handleZoomOut = () =>
    setEditorOpts((prev) => ({
      ...prev,
      zoomLevel: Math.max(prev.zoomLevel - 0.1, 0.1),
    }));

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleZoomOut}
        className="size-5 shrink-0 flex flex-col items-center justify-center gap-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm disabled:cursor-not-allowed"
        disabled={zoomLevel <= 0.2}
      >
        <LuMinus size={12} />
      </button>
      <button
        disabled={zoomLevel === 1}
        title={zoomLevel > 1 ? "Reset" : ""}
        onClick={() => setEditorOpts((prev) => ({ ...prev, zoomLevel: 1 }))}
        className="disabled:text-neutral-400"
      >
        Zoom
      </button>
      <button
        onClick={handleZoomIn}
        className="size-5 shrink-0 flex flex-col items-center justify-center gap-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm disabled:cursor-not-allowed"
        disabled={zoomLevel >= 2}
      >
        <LuPlus size={12} />
      </button>
    </div>
  );
}
