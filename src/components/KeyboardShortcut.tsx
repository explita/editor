import { keyboardShortcuts } from "../lib/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MdKeyboardHide } from "react-icons/md";

export function KeyboardShortcut() {
  return (
    <Sheet>
      <SheetTrigger title="Open Keyboard Shortcuts">
        <MdKeyboardHide size={16} />
      </SheetTrigger>
      <SheetContent className="explitaeditor:p-0">
        <SheetHeader>
          <SheetTitle className="explitaeditor:p-3">
            Keyboard Shortcuts
          </SheetTitle>
        </SheetHeader>

        <div className="editor-keyboard-shortcuts-wrapper">
          {keyboardShortcuts.map((shortcut) => (
            <div key={shortcut.command} className="content group">
              <span>{shortcut.command}</span>
              <span>
                {shortcut.windows.split("+").map((key) => (
                  <kbd key={key}>{key.trim()}</kbd>
                ))}
              </span>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
