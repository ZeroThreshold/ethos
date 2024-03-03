import { EditorComponent } from "@/components/codeEditor/EditorComponent";

const CodeEditor = ({ params }) => {
  return (
    <EditorComponent
      editorID={params.editorId}
      serverId={params.serverId}
      apiUrl={`/api/socket/editor`}
    />
  );
};

export default CodeEditor;
