"use client";

import { useEditorStore } from "../store/useEditorState";
import { ChangeEvent, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

export function FontSize() {
  const { editor } = useEditorStore();

  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace(/[px|pt|em|rem]/g, "")
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
    <div className="flex-center">
      <button className="toolbar-button" onClick={decrement}>
        <LuMinus size={16} />
      </button>
      {isEditing ? (
        <input
          value={inputValue}
          className="font-size-input"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <button
          className="font-size-button"
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
        >
          {currentFontSize}
        </button>
      )}
      <button className="toolbar-button" onClick={increment}>
        <LuPlus size={16} />
      </button>
    </div>
  );
}
