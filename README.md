`@explita/editor` is a highly customizable, modern rich-text editor built on top of TipTap for seamless integration into React applications.

This editor is designed for flexibility and ease of use, featuring powerful extensions like:

- **Starter Kit** for basic editing needs.
- **Line Height** and **Font Size** adjustments.
- **Text Alignment** for headings and paragraphs.
- **Advanced link support** with autolinking and protocol defaults.
- **Highlighting** with multicolor options.
- **Font Family**, **Underline**, and **Color Picker** for styling.
- **Image Resizing** for flexible image handling.
- **Task Lists** with nested tasks.
- **Table Editing** with resizable columns and rows.
- **Page Breaks** and **Horizontal Rules** for better content structuring.
- **Superscript** and **Subscript** for advanced typography.

Whether you're building a CMS, blog platform, or any content-focused application, `@explita/editor` delivers the tools you need for an exceptional text editing experience.

---

**Features:**

- Lightweight and performant.
- Fully customizable and extensible.
- Built on React and TipTap for developer-friendly configuration.
- Includes advanced tools for text styling, media, and tables.

---

##### Installation

> npm install @explita/editor

<br/>

**Basic Example**

```javascript
import React from "react";
import { Editor } from "@explita/editor";

const App = () => {
  const initialContent = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: "Hello, Editor!" }],
      },
    ],
  };

  const handleHTMLContent = (html) => {
    console.log("HTML Content:", html);
  };

  const handleJSONContent = (json) => {
    console.log("JSON Content:", json);
  };

  const handleTextContent = (text) => {
    console.log("Plain Text Content:", text);
  };

  const handleSave = (content) => {
    console.log("Saved Content:", content);
  };

  const handleClose = () => {
    console.log("Editor closed");
  };

  return (
    <Editor
      initialContent={initialContent}
      getHTMLContent={handleHTMLContent}
      getJSONContent={handleJSONContent}
      getTextContent={handleTextContent}
      onSave={handleSave}
      onClose={handleClose}
    />
  );
};

export default App;
```

<br/>

**Props**
| **Prop Name** | **Type** | **Description** | **Default** |
|---------------------|-------------------------------------------|---------------------------------------------------------------------|-----------------|
| `initialContent` | `string \| JSONContent \| undefined` | The content to load into the editor. Supports HTML or JSON. | `undefined` |
| `getTextContent` | `(text: string) => void` | Callback for receiving the plain text content of the editor. | `undefined` |
| `getJSONContent` | `(json: JSONContent) => void` | Callback for receiving the editor's content as a JSON object. | `undefined` |
| `getHTMLContent` | `(html: string) => void` | Callback for receiving the editor's content in HTML format. | `undefined` |
| `onSave` | `(content: string \| undefined) => void` | Triggered when the editor's save action is invoked, passing content.| `undefined` |
| `onClose` | `() => void` | Triggered when the editor's close action is invoked. | `undefined` |

<br/>
**Why choose `@explita/editor`?**

- It’s modern, intuitive, and integrates seamlessly with TailwindCSS and other styling frameworks.
- Perfect for both basic and advanced content creation needs.
