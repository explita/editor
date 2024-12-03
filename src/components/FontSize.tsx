"use client";

import { useEditorStore } from "../store/useEditorState";
import { ChangeEvent, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export function FontSize() {
  const { editor } = useEditorStore();

  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  function updateFontSize(newSize: string) {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      setFontSize(newSize);
      setInputValue(newSize);
      setIsEditing(false);
      editor?.chain().focus().setFontSize(`${size}px`).run();
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleInputBlur() {
    updateFontSize(inputValue);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  }

  function increment() {
    const newSize = parseInt(fontSize) + 1;
    updateFontSize(newSize.toString());
  }

  function decrement() {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  }

  return (
    <div className="flex items-center gap-x-0.5">
      <button
        className="h-7 w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80"
        onClick={decrement}
      >
        <LuMinus size={16} />
      </button>
      {isEditing ? (
        <input
          value={inputValue}
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <button
          className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent cursor-text"
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
        >
          {currentFontSize}
        </button>
      )}
      <button
        className="h-7 w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80"
        onClick={increment}
      >
        <LuPlus size={16} />
      </button>
    </div>
  );
}
