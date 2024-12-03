import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    pageBreak: {
      insertPageBreak: () => ReturnType;
    };
  }
}

export const PageBreak = Node.create({
  name: "pageBreak",

  group: "block",
  selectable: true,
  draggable: false,

  parseHTML() {
    return [{ tag: "div[data-page-break]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-page-break": "" }),
      ["hr"],
    ];
  },

  addCommands() {
    return {
      insertPageBreak:
        () =>
        ({ chain }) => {
          return chain().insertContent({ type: this.name }).run();
        },
    };
  },

  //   addInputRules() {
  //     return [
  //       {
  //         find: /^(---|\*\*\*)$/,
  //         handler: ({ state, range, match, chain }) => {
  //           chain().deleteRange(range).insertContent({ type: this.name }).run();

  //           return true;
  //         },
  //       },
  //     ];
  //   },
});
