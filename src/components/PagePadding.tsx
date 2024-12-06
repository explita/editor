import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEditorStore } from "../store/useEditorState";
import { useEffect, useState } from "react";
import { EditorOpts } from "../lib/utils";

const padding = [
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Right",
    value: "right",
  },
  {
    label: "Bottom",
    value: "bottom",
  },
  {
    label: "Left",
    value: "left",
  },
];

type Props = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

export function PagePadding({ opened, setOpened }: Props) {
  const { editorOpts, setEditorOpts } = useEditorStore();
  const [editorPadding, setEditorPadding] = useState<EditorOpts["padding"]>(
    editorOpts.padding
  );

  useEffect(() => {
    setEditorPadding(editorOpts.padding);
  }, [editorOpts.padding]);

  return (
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogContent className="w-[300px]">
        <DialogHeader>
          <DialogTitle className="text-slate-700">Page Padding</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 pt-4">
          {padding.map(({ label, value }) => (
            <div key={label}>
              <p className="text-sm font-medium leading-none mb-1.5 text-slate-600">
                {label}
              </p>
              <div className="relative flex items-center gap-1.5">
                <span className="absolute flex items-center justify-center right-2 h-[90%] bg-white">
                  inch
                </span>
                <Input
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder={label}
                  defaultValue={(
                    editorPadding[value as keyof typeof editorPadding] || 0
                  ).toFixed(2)}
                  onChange={(e) =>
                    setEditorPadding((prev) => ({
                      ...prev,
                      [value]: Number(e.target.value),
                    }))
                  }
                  className=" text-center appearance-none outline-none"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end pt-2">
          <Button
            onClick={() => {
              setEditorOpts((prev) => ({
                ...prev,
                padding: editorPadding,
              }));
              setOpened(false);
            }}
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
