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
          className="explitaeditor:flex explitaeditor:flex-col explitaeditor:!p-2"
        >
          <FaTable className="explitaeditor:text-lg" />
          Insert table
        </button>
      </Table>
      <button
        onClick={() => editor.chain().focus().fixTables().run()}
        className="explitaeditor:flex explitaeditor:flex-col explitaeditor:!p-2"
      >
        <RxTable className="explitaeditor:text-lg" />
        Fix tables
      </button>
      <Separator className="explitaeditor:h-14 explitaeditor:bg-neutral-200" />
      <div className="explitaeditor:grid explitaeditor:grid-cols-2">
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
      <Separator className="explitaeditor:h-14 explitaeditor:bg-neutral-200" />
      <div className="explitaeditor:flex explitaeditor:flex-col">
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
      <Separator className="explitaeditor:h-14 explitaeditor:bg-neutral-200" />
      <div className="explitaeditor:grid explitaeditor:grid-cols-2">
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
      <Separator className="explitaeditor:h-14 explitaeditor:bg-neutral-200" />
      <div className="explitaeditor:flex explitaeditor:flex-col">
        <button onClick={() => editor.chain().focus().goToNextCell().run()}>
          <BiArrowToRight />
          Go to next cell
        </button>
        <button onClick={() => editor.chain().focus().goToPreviousCell().run()}>
          <BiSolidArrowFromRight />
          Go to previous cell
        </button>
      </div>
      <Separator className="explitaeditor:h-14 explitaeditor:bg-neutral-200" />
      <div className="explitaeditor:flex explitaeditor:flex-col">
        <button
          onClick={() => editor.chain().focus().deleteRow().run()}
          className="explitaeditor:!text-red-400 explitaeditor:hover:!bg-red-100"
        >
          <AiOutlineDeleteRow />
          Delete Row
        </button>
        <button
          onClick={() => editor.chain().focus().deleteColumn().run()}
          className="explitaeditor:!text-red-400 explitaeditor:hover:!bg-red-100"
        >
          <AiOutlineDeleteColumn />
          Delete Column
        </button>
      </div>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="explitaeditor:flex explitaeditor:flex-col explitaeditor:!p-2 explitaeditor:bg-red-100 explitaeditor:!text-red-500 explitaeditor:hover:!bg-red-200 explitaeditor:hover:!text-red-900"
      >
        <FaDeleteLeft />
        Delete table
      </button>
    </div>
  );
}

TablePopupMenu.Mini = function Mini() {
  const { editor } = useEditorStore();

  if (!editor) return <></>;

  return (
    <div className="explitaeditor:flex explitaeditor:flex-wrap explitaeditor:gap-2 explitaeditor:px-2 explitaeditor:border-t explitaeditor:border-[#C7C7C7]">
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        title="Add Row Above"
        className="toolbar-button"
      >
        <TbLayoutAlignTopFilled />
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        title="Add Row Below"
        className="toolbar-button"
      >
        <TbLayoutAlignBottomFilled />
      </button>

      <button
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        title="Add Column Before"
        className="toolbar-button"
      >
        <TbLayoutAlignLeftFilled />
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        title="Add Column After"
        className="toolbar-button"
      >
        <TbLayoutAlignRightFilled />
      </button>
      <button
        onClick={() => editor.chain().focus().mergeCells().run()}
        disabled={editor?.state.selection.ranges.length < 2}
        className="toolbar-button"
      >
        <AiOutlineMergeCells />
      </button>
      <button
        onClick={() => editor.chain().focus().splitCell().run()}
        disabled={
          editor?.state.selection.$anchor.node(-1)?.attrs?.colspan < 2 ||
          editor?.state.selection.ranges.length > 1
        }
        className="toolbar-button"
      >
        <AiOutlineSplitCells />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        title="Toggle header column"
        className="toolbar-button"
      >
        <TbTableColumn />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        title="Toggle header row"
        className="toolbar-button"
      >
        <TbTableRow />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        title="Toggle header cell"
        className="toolbar-button"
      >
        <TbTableAlias />
      </button>
      <button
        onClick={() => editor.chain().focus().goToNextCell().run()}
        title="Go to next cell"
        className="toolbar-button"
      >
        <BiArrowToRight />
      </button>
      <button
        onClick={() => editor.chain().focus().goToPreviousCell().run()}
        title="Go to previous cell"
        className="toolbar-button"
      >
        <BiSolidArrowFromRight />
      </button>
      <button
        onClick={() => editor.chain().focus().deleteRow().run()}
        title="Delete Row"
        className="toolbar-button explitaeditor:!text-red-400 explitaeditor:hover:!bg-red-100"
      >
        <AiOutlineDeleteRow />
      </button>
      <button
        onClick={() => editor.chain().focus().deleteColumn().run()}
        title="Delete Column"
        className="toolbar-button explitaeditor:!text-red-400 explitaeditor:hover:!bg-red-100"
      >
        <AiOutlineDeleteColumn />
      </button>

      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        title="Delete table"
        className="toolbar-button explitaeditor:!text-red-400 explitaeditor:hover:!bg-red-100"
      >
        <FaDeleteLeft />
      </button>
    </div>
  );
};
