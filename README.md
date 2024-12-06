`@explita/editor` is a versatile, modern rich-text editor built on TipTap for seamless integration into React applications. It provides extensive customization options and advanced features to cater to diverse content creation needs.

This editor is designed for flexibility and ease of use, featuring powerful extensions like:

- **Starter Kit** for essential editing tools.
- **Line Height** and **Font Size** controls for text customization.
- **Text Alignment** for fine-tuned layouts.
- **Advanced Link Support** with autolinking and protocol presets.
- **Highlighting** with multicolor options.
- **Font Family**, **Underline**, and **Color Picker** for unique styling.
- **Image Resizing** for dynamic media control.
- **Task Lists** with nested tasks.
- **Table Editing** with resizable rows and columns.
- **Page Breaks** and **Horizontal Rules** for better document organization.
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

  const handleHTMLContent = (html) => console.log("HTML Content:", html);
  const handleJSONContent = (json) => console.log("JSON Content:", json);
  const handleTextContent = (text) => console.log("Plain Text Content:", text);
  const handleSave = (content) => console.log("Saved Content:", content);
  const handleCreateNew = () => console.log("Create New Document");
  const handleClose = () => console.log("Editor closed");
  const getEditorOpts = (opts) => console.log("Editor Options:", opts);

  return (
    <Editor
      initialContent={initialContent}
      getHTMLContent={handleHTMLContent}
      getJSONContent={handleJSONContent}
      getTextContent={handleTextContent}
      onSave={handleSave}
      onCreateNew={handleCreateNew}
      onClose={handleClose}
      getEditorOpts={getEditorOpts}
      toolbarRight={<></>}
      hideToolbar={false} //optional
      hideMenubar={false} //optional
      readOnly={false} // Set to true for non-editable mode
    />
  );
};

export default App;
```

<br/>

**Props**
| **Prop Name** | **Type** | **Description** | **Default** |
|---------------------|-------------------------------------------|---------------------------------------------------------------------|-----------------|
| `initialContent` | `string \| JSONContent \| undefined` | Content to load into the editor, supporting HTML or JSON formats. | `undefined` |
| `editorOpts` | `EditorOpts` | Editor Options object. | `undefined` |
| `getTextContent` | `(text: string) => void` | Callback to receive the plain text content of the editor. | `undefined` |
| `getJSONContent` | `(json: JSONContent) => void` | Callback to receive the editor's content as a JSON object. | `undefined` |
| `getHTMLContent` | `(html: string) => void` | Callback to receive the editor's content in HTML format. | `undefined` |
| `onSave` | `(content: string) => void`| Triggered when the save action is invoked, passing the editor content. | `undefined` |
| `onCreateNew` | `() => void` | Triggered to create a new document or editor instance. | `undefined` |
| `onClose` | `() => void` | Triggered when the close action is invoked. | `undefined` |
| `getEditorOpts` | `(opts: object) => void` | Callback to access editor options and configuration. | `undefined` |
| `readOnly` | `boolean` | If true, the editor is non-editable. | `false` |
| `toolbarRight` | `React.ReactNode \| string \| null \| undefined` | Custom elements to display on the right side of the toolbar. | `undefined` |
| `hideToolbar` | `boolean` | If true, hides the editor toolbar. | `false` |
| `hideMenubar` | `boolean` | If true, hides the editor menu bar. | `false` |

<br/>

#### **Advanced Usage**

1.  **_Retain Page Margins/Padding:_**

- Retrieve editor options using the getEditorOpts callback.
- Save these options and pass them back to the Editor component alongside the content (if there’s initialContent). - Do this only when the Editor is initialized, avoiding unnecessary updates on every keypress.
**Note**: you can double-click the ruler anytime to modify page paddings.

  <br/>

2.  **_Custom Toolbar:_**
    Use toolbarRight to inject custom components like buttons or additional actions.
    <br/>
3.  **_Flexible Content Management:_**
    Supports retrieving and saving content in multiple formats: HTML, JSON, and plain text.

This ensures consistent styling and layout for documents created or modified in the editor.

`@explita/editor` offers a feature-rich, user-friendly, and developer-focused solution for all your text editing needs.

<br/>

#### **Why Choose `@explita/editor`?**

- Lightweight and performant for modern web applications.
- Fully customizable and extensible to meet various requirements.
- Built with React and TipTap, ensuring easy configuration for developers.
- Ideal for applications ranging from basic editors to advanced CMS platforms.
