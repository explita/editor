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
      >
        <div className="p-2.5 grid grid-cols-8 items-center justify-center gap-2">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => {
              const currentRow = row + 1;
              const currentCol = col + 1;
              return (
                <button
                  key={`${currentRow}-${currentCol}`}
                  className={`size-5 border ${
                    currentRow <= rows && currentCol <= cols
                      ? "border-blue-400"
                      : "border-gray-200"
                  }`}
                  onMouseEnter={() => onMouseEnter(currentRow, currentCol)}
                  onClick={onClick}
                />
              );
            })
          )}
        </div>
        <div className="m-2 text-sm">
          <span>
            Selected: {rows} x {cols}
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
