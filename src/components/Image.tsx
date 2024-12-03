"use client";

import { useState } from "react";
import { useEditorStore } from "../store/useEditorState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
          <button
            title="Add Image"
            className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center gap-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
          >
            <LuImage size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onUpload}>
            <LuUpload size={16} /> Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <LuFileInput size={16} /> Image URL
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Image URL</DialogTitle>
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
