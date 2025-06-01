import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEditorStore } from "../store/useEditorState";
import { LuChevronDown } from "react-icons/lu";
import { fonts } from "../lib/constants";
import { cn } from "../lib/utils";

export function FontFamily() {
  const { editor } = useEditorStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="dropdown-trigger-button">
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily?.replace(/"/g, "") ||
              "Arial"}
          </span>
          <LuChevronDown size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="editor-dropdown-content" align="start">
        {fonts.map(({ label, value }) => {
          return (
            <button
              key={value}
              onClick={() => editor?.chain().focus().setFontFamily(value).run()}
              className={cn(
                "editor-dropdown-menu-button",
                editor?.getAttributes("textStyle").fontFamily === value &&
                  "editor-item-active"
              )}
              style={{ fontFamily: value }}
            >
              {label}
            </button>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
