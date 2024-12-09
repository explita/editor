"use client";

import { useEffect, useRef, useState } from "react";
import { DEFAULT_MARGIN, INCH_TO_PX, MIN_SPACE } from "../lib/constants";

import { useEditorStore } from "../store/useEditorState";
import { PagePadding } from "./PagePadding";

const markers = Array.from({ length: 83 }, (_, i) => i);

export function Ruler() {
  const { editorOpts, setEditorOpts } = useEditorStore();

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rulerWidth, setRulerWidth] = useState(0);

  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editorContent = document.querySelector(".editor-content");

    setRulerWidth(editorContent?.clientWidth || 0);
  }, []);

  function handlePagePadding(section: string, value: number) {
    setEditorOpts((prev) => ({
      ...prev,
      padding: {
        ...prev.padding,
        [section]: value,
      },
    }));
  }

  function handleLeftMouseDown() {
    setIsDraggingLeft(true);
  }

  function handleRightMouseDown() {
    setIsDraggingRight(true);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector(".ruler-container");
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        const rawPosition = Math.max(0, Math.min(rulerWidth, relativeX));

        if (isDraggingLeft) {
          const maxLeftPosition =
            rulerWidth - (editorOpts.padding.right || 0) - MIN_SPACE;
          const newLeftPosition = Math.min(maxLeftPosition, rawPosition);

          handlePagePadding("left", newLeftPosition / INCH_TO_PX);
        } else if (isDraggingRight) {
          const maxRightPosition =
            rulerWidth - ((editorOpts.padding.left || 0) + MIN_SPACE);
          const newRightPosition = Math.max(rulerWidth - rawPosition, 0);
          const contraintRightPosition = Math.min(
            maxRightPosition,
            newRightPosition
          );

          handlePagePadding("right", contraintRightPosition / INCH_TO_PX);
        }
      }
    }
  }

  function handleMouseUp() {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  }

  function handleLeftDoubleClick() {
    handlePagePadding("left", DEFAULT_MARGIN * INCH_TO_PX);
  }

  function handleRightDoubleClick() {
    handlePagePadding("right", DEFAULT_MARGIN * INCH_TO_PX);
  }

  return (
    <>
      <PagePadding opened={isDialogOpen} setOpened={setIsDialogOpen} />
      <div
        ref={rulerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={() => setIsDialogOpen(true)}
        className="ruler-container-wrapper"
        style={{
          transform: `scale(${editorOpts.zoomLevel})`,
          width: `${rulerWidth}px`,
        }}
      >
        <div className="ruler-container">
          <Marker
            position={(editorOpts.padding.left || 0) * INCH_TO_PX || 0}
            isLeft={true}
            isDragging={isDraggingLeft}
            onMouseDown={handleLeftMouseDown}
            onDoudleClick={handleLeftDoubleClick}
          />
          <Marker
            position={(editorOpts.padding.right || 0) * INCH_TO_PX || 0}
            isLeft={false}
            isDragging={isDraggingRight}
            onMouseDown={handleRightMouseDown}
            onDoudleClick={handleRightDoubleClick}
          />
          <div className="absolute inset-x-0 bottom-0 h-full">
            <div
              className="relative h-full"
              style={{ width: `${rulerWidth}px` }}
            >
              {markers.map((marker) => {
                const position = (marker * rulerWidth) / 82;

                return (
                  <div
                    key={marker}
                    className="absolute bottom-0"
                    style={{ left: `${position}px` }}
                  >
                    {marker % 10 === 0 && (
                      <>
                        <span className="mark-10" />
                        <span className="digit">{marker / 10 + 1}</span>
                      </>
                    )}
                    {marker % 5 === 0 && marker % 10 !== 0 && (
                      <span className="mark-5-10" />
                    )}
                    {marker % 5 !== 0 && <span className="mark-5" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type MarkerProps = {
  position: number;
  isLeft: boolean;
  isDragging: boolean;
  onMouseDown: () => void;
  onDoudleClick: () => void;
};

function Marker({
  position,
  isLeft,
  isDragging,
  onMouseDown,
  onDoudleClick,
}: MarkerProps) {
  return <></>;
  // return (
  //   <div
  //     className="absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2"
  //     style={{ [isLeft ? "left" : "right"]: `${position}px` }}
  //     onMouseDown={onMouseDown}
  //     onDoubleClick={onDoudleClick}
  //   >
  //     <FaCaretDown className="absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2" />
  //     <div
  //       className="absolute left-1/2 top-4 transform -translate-x-1/2 transition-opacity duration-150 !h-screen w-[1px] bg-blue-500 scale-x-50"
  //       style={{
  //         display: isDragging ? "block" : "none",
  //       }}
  //     />
  //   </div>
  // );
}
