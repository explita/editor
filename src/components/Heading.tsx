import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { type Level } from "@tiptap/extension-heading";
import { useEditorStore } from "../store/useEditorState";
import { LuChevronDown } from "react-icons/lu";
import { headings } from "../lib/constants";
import { cn } from "../lib/utils";

export function Heading() {
  const { editor } = useEditorStore();

  function getCurrentHeading() {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }

    return "Normal";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="dropdown-trigger-button">
          <span className="truncate">{getCurrentHeading()}</span>
          <LuChevronDown size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="editor-dropdown-content" align="start">
        {headings.map(({ label, value, fontSize }) => {
          return (
            <button
              key={value}
              onClick={() => {
                if (value === 0) {
                  editor?.chain().focus().setParagraph().run();
                } else {
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({ level: value as Level })
                    .run();
                }
              }}
              className={cn(
                "editor-dropdown-menu-button",
                (value === 0 && !editor?.isActive("heading")) ||
                  (editor?.isActive("heading", { level: value }) &&
                    "editor-item-active")
              )}
              style={{ fontSize }}
            >
              {label}
            </button>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
