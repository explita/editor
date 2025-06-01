"use client";

import { useState } from "react";
import { useEditorStore } from "../store/useEditorState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { LuFileInput, LuImage, LuUpload } from "react-icons/lu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Image() {
  const { editor } = useEditorStore();
  const [imageURL, setImageURL] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onChange(src: string) {
    editor?.chain().focus().setImage({ src }).run();
  }

  function onUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    };

    input.click();
  }

  function handleImageURL() {
    if (imageURL) {
      onChange(imageURL);
      setImageURL("");
      setIsDialogOpen(false);
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button title="Add Image" className="toolbar-button">
            <LuImage size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="editor-dropdown-content">
          <button onClick={onUpload} className="editor-dropdown-menu-button">
            <LuUpload size={16} /> Upload
          </button>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="editor-dropdown-menu-button"
          >
            <LuFileInput size={16} /> Image URL
          </button>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-slate-700">Image URL</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Insert url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleImageURL();
              }
            }}
          />
          <DialogFooter>
            <Button onClick={handleImageURL}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
