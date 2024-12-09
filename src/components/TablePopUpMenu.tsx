import { useEditorStore } from "../store/useEditorState";
import {
  TbLayoutAlignBottomFilled,
  TbLayoutAlignLeftFilled,
  TbLayoutAlignRightFilled,
  TbLayoutAlignTopFilled,
  TbTableAlias,
  TbTableColumn,
  TbTableRow,
} from "react-icons/tb";
import { RxTable } from "react-icons/rx";
import { FaDeleteLeft, FaTable } from "react-icons/fa6";
import {
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineMergeCells,
  AiOutlineSplitCells,
} from "react-icons/ai";
import { BiArrowToRight, BiSolidArrowFromRight } from "react-icons/bi";
import { Separator } from "./ui/separator";
import { Table } from "./Table";

export function TablePopupMenu() {
  const { editor } = useEditorStore();

  if (!editor) return <></>;

  return (
    <div className="table-popup-menu">
      <Table>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
          className="flex-col !p-2"
        >
          <FaTable className="text-lg" />
          Insert table
        </button>
      </Table>
      <button
        onClick={() => editor.chain().focus().fixTables().run()}
        className="flex-col !p-2"
      >
        <RxTable className="text-lg" />
        Fix tables
      </button>
      <Separator className="h-14 bg-neutral-200" />
      <div className="grid grid-cols-2">
        <button onClick={() => editor.chain().focus().addRowBefore().run()}>
          <TbLayoutAlignTopFilled />
          Add Row Above
        </button>
        <button onClick={() => editor.chain().focus().addRowAfter().run()}>
          <TbLayoutAlignBottomFilled />
          Add Row Below
        </button>

        <button onClick={() => editor.chain().focus().addColumnBefore().run()}>
          <TbLayoutAlignLeftFilled />
          Add Column Before
        </button>
        <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
          <TbLayoutAlignRightFilled />
          Add Column After
        </button>
      </div>
      <Separator className="h-14 bg-neutral-200" />
      <div className="flex flex-col">
        <button
          onClick={() => editor.chain().focus().mergeCells().run()}
          disabled={editor?.state.selection.ranges.length < 2}
        >
          <AiOutlineMergeCells />
          Merge cells
        </button>
        <button
          onClick={() => editor.chain().focus().splitCell().run()}
          disabled={
            editor?.state.selection.$anchor.node(-1)?.attrs?.colspan < 2 ||
            editor?.state.selection.ranges.length > 1
          }
        >
          <AiOutlineSplitCells />
          Split cell
        </button>
      </div>
      <Separator className="h-14 bg-neutral-200" />
      <div className="grid grid-cols-2">
        <button
          onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        >
          <TbTableColumn />
          Toggle header column
        </button>
        <button onClick={() => editor.chain().focus().toggleHeaderRow().run()}>
          <TbTableRow />
          Toggle header row
        </button>
        <button onClick={() => editor.chain().focus().toggleHeaderCell().run()}>
          <TbTableAlias />
          Toggle header cell
        </button>
      </div>
      <Separator className="h-14 bg-neutral-200" />
      <div className="flex flex-col">
        <button onClick={() => editor.chain().focus().goToNextCell().run()}>
          <BiArrowToRight />
          Go to next cell
        </button>
        <button onClick={() => editor.chain().focus().goToPreviousCell().run()}>
          <BiSolidArrowFromRight />
          Go to previous cell
        </button>
      </div>
      <Separator className="h-14 bg-neutral-200" />
      <div className="flex flex-col">
        <button
          onClick={() => editor.chain().focus().deleteRow().run()}
          className="!text-red-400 hover:!bg-red-100"
        >
          <AiOutlineDeleteRow />
          Delete Row
        </button>
        <button
          onClick={() => editor.chain().focus().deleteColumn().run()}
          className="!text-red-400 hover:!bg-red-100"
        >
          <AiOutlineDeleteColumn />
          Delete Column
        </button>
      </div>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="flex-col !p-2 bg-red-100 !text-red-500 hover:!bg-red-200 hover:text-red-900"
      >
        <FaDeleteLeft />
        Delete table
      </button>
    </div>
  );
}
