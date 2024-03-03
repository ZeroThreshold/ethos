"use client";
import qs from "query-string";
import axios from "axios";
import { Editor } from "@monaco-editor/react";

export const EditorComponent = ({ editorID, apiUrl, serverId }) => {
  const onEditorChange = async (value) => {
    try {
      const url = qs.stringifyUrl({
        url: apiUrl,
        query: {
          editorId: editorID,
          serverId: serverId,
        },
      });

      await axios.post(url, { content: value });
    } catch (error) {
      console.log(error);
    }
  };

  return <Editor theme="vs-dark" language="python" onChange={onEditorChange} />;
};
