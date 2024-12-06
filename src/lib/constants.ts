import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
} from "react-icons/lu";

export const PAGE_WIDTH = 816;
export const MIN_SPACE = 100;
export const DEFAULT_RULER_MARGIN = 0.5;
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
