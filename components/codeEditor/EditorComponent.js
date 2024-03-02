"use client";

import { Editor } from "@monaco-editor/react";

export const EditorComponent = () => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="python"
      defaultValue="#This is your code editor! Write your code here!"
    />
  );
};
