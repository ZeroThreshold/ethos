"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export function EditorComponent({ editorID, serverId, apiUrl }) {
  const [content, setContent] = useState("");
  const roomId = editorID; // replace with your actual room ID
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io("http://172.235.9.247:5000");

    newSocket.on("connect", () => {
      console.log("connected to socket.io server");
      newSocket.emit("joinRoom", roomId);
    });

    newSocket.on("editor:update", (data) => {
      setContent(data);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [roomId]);

  return (
    <AceEditor
      mode="python"
      height="100%"
      width="100%"
      theme="monokai"
      value={content}
      onChange={(newContent) => {
        setContent(newContent);
        socket.emit("editor:update", roomId, newContent);
      }}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
}
