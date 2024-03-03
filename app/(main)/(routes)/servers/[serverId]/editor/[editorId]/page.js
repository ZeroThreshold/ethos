import { EditorComponent } from "@/components/codeEditor/EditorComponent";

const CodeEditor = ({ params }) => {
  return <EditorComponent editorID={params.editorId} />;
};

export default CodeEditor;
