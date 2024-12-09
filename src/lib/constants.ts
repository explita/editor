import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
} from "react-icons/lu";

export const PAGE_WIDTH = 816;
export const PAGE_HEIGHT = 1132;
export const MIN_SPACE = 100;
export const DEFAULT_MARGIN = 0.5;
export const INCH_TO_PX = 96;

export const fonts = [
  { value: "Arial, Helvetica, sans-serif", label: "Arial" },
  { value: "Arial Black, Gadget, sans-serif", label: "Arial Black" },
  { value: "Agency FB Bold", label: "Agency FB Bold" },
  { value: "Brush Script MT, sans-serif", label: "Brush Script MT" },
  { value: "Comic Sans MS, cursive, sans-serif", label: "Comic Sans MS" },
  { value: "Courier New, Courier, monospace", label: "Courier New" },
  { value: "Georgia, serif", label: "Georgia" },
  { value: "Helvetica, sans-serif", label: "Helvetica" },
  { value: "Impact, Charcoal, sans-serif", label: "Impact" },
  {
    value: "Lucida Sans Unicode, Lucida Grande, sans-serif",
    label: "Lucida Sans Unicode",
  },
  { value: "Tahoma, Geneva, sans-serif", label: "Tahoma" },
  { value: "Times New Roman, Times, serif", label: "Times New Roman" },
  { value: "Trebuchet MS, Helvetica, sans-serif", label: "Trebuchet MS" },
  { value: "Verdana, Geneva, sans-serif", label: "Verdana" },
];

export const headings = [
  {
    label: "Normal",
    value: 0,
    fontSize: "16px",
  },
  {
    label: "Heading 1",
    value: 1,
    fontSize: "32px",
  },
  {
    label: "Heading 2",
    value: 2,
    fontSize: "24px",
  },
  {
    label: "Heading 3",
    value: 3,
    fontSize: "20px",
  },
  {
    label: "Heading 4",
    value: 4,
    fontSize: "18px",
  },
];

export const textAlignment = [
  {
    label: "Left",
    value: "left",
    icon: LuAlignLeft,
  },
  {
    label: "Center",
    value: "center",
    icon: LuAlignCenter,
  },
  {
    label: "Justify",
    value: "justify",
    icon: LuAlignJustify,
  },
  {
    label: "Right",
    value: "right",
    icon: LuAlignRight,
  },
];

export const lineHeights = [
  {
    label: "Default",
    value: "normal",
  },
  {
    label: "Single",
    value: "1",
  },
  {
    label: "1.15",
    value: "1.15",
  },
  {
    label: "1.5",
    value: "1.5",
  },
  {
    label: "Double",
    value: "2",
  },
];

export const keyboardShortcuts = [
  // General Commands
  {
    category: "General",
    command: "Copy",
    windows: "Ctrl + C",
    mac: "Cmd + C",
  },
  {
    category: "General",
    command: "Cut",
    windows: "Ctrl + X",
    mac: "Cmd + X",
  },
  {
    category: "General",
    command: "Paste",
    windows: "Ctrl + V",
    mac: "Cmd + V",
  },
  {
    category: "General",
    command: "Paste without formatting",
    windows: "Ctrl + Shift + V",
    mac: "Cmd + Shift + V",
  },
  {
    category: "General",
    command: "Undo",
    windows: "Ctrl + Z",
    mac: "Cmd + Z",
  },
  {
    category: "General",
    command: "Redo",
    windows: "Ctrl + Shift + Z",
    mac: "Cmd + Shift + Z",
  },
  {
    category: "General",
    command: "Add a line break",
    windows: "Shift + Enter",
    mac: "Shift + Enter",
  },
  {
    category: "General",
    command: "Ctrl + Enter",
    windows: "Ctrl + Enter",
    mac: "Cmd + Enter",
  },

  // Text Formatting
  {
    category: "Text Formatting",
    command: "Bold",
    windows: "Ctrl + B",
    mac: "Cmd + B",
  },
  {
    category: "Text Formatting",
    command: "Italicize",
    windows: "Ctrl + I",
    mac: "Cmd + I",
  },
  {
    category: "Text Formatting",
    command: "Underline",
    windows: "Ctrl + U",
    mac: "Cmd + U",
  },
  {
    category: "Text Formatting",
    command: "Strikethrough",
    windows: "Ctrl + Shift + S",
    mac: "Cmd + Shift + S",
  },
  {
    category: "Text Formatting",
    command: "Highlight",
    windows: "Ctrl + Shift + H",
    mac: "Cmd + Shift + H",
  },
  {
    category: "Text Formatting",
    command: "Code",
    windows: "Ctrl + E",
    mac: "Cmd + E",
  },

  // Paragraph Formatting
  {
    category: "Paragraph Formatting",
    command: "Apply normal text style",
    windows: "Ctrl + Alt + 0",
    mac: "Cmd + Alt + 0",
  },
  {
    category: "Paragraph Formatting",
    command: "Apply heading style 1",
    windows: "Ctrl + Alt + 1",
    mac: "Cmd + Alt + 1",
  },
  {
    category: "Paragraph Formatting",
    command: "Apply heading style 2",
    windows: "Ctrl + Alt + 2",
    mac: "Cmd + Alt + 2",
  },
  {
    category: "Paragraph Formatting",
    command: "Apply heading style 3",
    windows: "Ctrl + Alt + 3",
    mac: "Cmd + Alt + 3",
  },
  {
    category: "Paragraph Formatting",
    command: "Apply heading style 4",
    windows: "Ctrl + Alt + 4",
    mac: "Cmd + Alt + 4",
  },
  {
    category: "Paragraph Formatting",
    command: "Apply heading style 5",
    windows: "Ctrl + Alt + 5",
    mac: "Cmd + Alt + 5",
  },
  {
    category: "Paragraph Formatting",
    command: "Apply heading style 6",
    windows: "Ctrl + Alt + 6",
    mac: "Cmd + Alt + 6",
  },
  {
    category: "Paragraph Formatting",
    command: "Ordered list",
    windows: "Ctrl + Shift + 7",
    mac: "Cmd + Shift + 7",
  },
  {
    category: "Paragraph Formatting",
    command: "Bullet list",
    windows: "Ctrl + Shift + 8",
    mac: "Cmd + Shift + 8",
  },
  {
    category: "Paragraph Formatting",
    command: "Task list",
    windows: "Ctrl + Shift + 9",
    mac: "Cmd + Shift + 9",
  },
  {
    category: "Paragraph Formatting",
    command: "Blockquote",
    windows: "Ctrl + Shift + B",
    mac: "Cmd + Shift + B",
  },
  {
    category: "Paragraph Formatting",
    command: "Left align",
    windows: "Ctrl + Shift + L",
    mac: "Cmd + Shift + L",
  },
  {
    category: "Paragraph Formatting",
    command: "Center align",
    windows: "Ctrl + Shift + E",
    mac: "Cmd + Shift + E",
  },
  {
    category: "Paragraph Formatting",
    command: "Right align",
    windows: "Ctrl + Shift + R",
    mac: "Cmd + Shift + R",
  },
  {
    category: "Paragraph Formatting",
    command: "Justify",
    windows: "Ctrl + Shift + J",
    mac: "Cmd + Shift + J",
  },
  {
    category: "Paragraph Formatting",
    command: "Code block",
    windows: "Ctrl + Alt + C",
    mac: "Cmd + Alt + C",
  },
  {
    category: "Paragraph Formatting",
    command: "Subscript",
    windows: "Ctrl + ,",
    mac: "Cmd + ,",
  },
  {
    category: "Paragraph Formatting",
    command: "Superscript",
    windows: "Ctrl + .",
    mac: "Cmd + .",
  },

  // Text Selection
  {
    category: "Text Selection",
    command: "Select all",
    windows: "Ctrl + A",
    mac: "Cmd + A",
  },
  {
    category: "Text Selection",
    command: "Extend selection one character to left",
    windows: "Shift + ←",
    mac: "Shift + ←",
  },
  {
    category: "Text Selection",
    command: "Extend selection one character to right",
    windows: "Shift + →",
    mac: "Shift + →",
  },
  {
    category: "Text Selection",
    command: "Extend selection one line up",
    windows: "Shift + ↑",
    mac: "Shift + ↑",
  },
  {
    category: "Text Selection",
    command: "Extend selection one line down",
    windows: "Shift + ↓",
    mac: "Shift + ↓",
  },
];
