"use client";

import { useState } from "react";
import { useEditorStore } from "../store/useEditorState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Table({
  children,
  isToolbar = false,
}: {
  children: React.ReactNode;
  isToolbar?: boolean;
}) {
  const { editor } = useEditorStore();
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  function onClick() {
    if (rows > 0 && cols > 0) {
      editor
        ?.chain()
        .focus()
        .insertTable({ rows, cols, withHeaderRow: false })
        .run();
    }
  }

  function onMouseEnter(row: number, col: number) {
    setRows(row);
    setCols(col);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseOut={() => {
          setRows(0), setCols(0);
        }}
        align={isToolbar ? "center" : "start"}
        className="editor-dropdown-content"
      >
        <div className="explitaeditor:p-2.5 explitaeditor:grid explitaeditor:grid-cols-8 explitaeditor:items-center explitaeditor:justify-center explitaeditor:gap-2">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const currentRow = row + 1;
              const currentCol = col + 1;
              return (
                <button
                  key={`${currentRow}-${currentCol}`}
                  className={`explitaeditor:size-5 explitaeditor:border ${
                    currentRow <= rows && currentCol <= cols
                      ? "explitaeditor:border-blue-400"
                      : "explitaeditor:border-gray-200"
                  }`}
                  onMouseEnter={() => onMouseEnter(currentRow, currentCol)}
                  onClick={onClick}
                />
              );
            })
          )}
        </div>
        <div className="explitaeditor:m-2 explitaeditor:text-sm explitaeditor:text-neutral-700">
          <span>
            Selected: {rows} x {cols}
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
