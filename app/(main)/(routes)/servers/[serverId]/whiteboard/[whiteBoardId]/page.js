const WhiteBoardPage = ({ params }) => {
  return (
    <iframe
      src={`https://cloud13.de/testwhiteboard/?whiteboardid=${params.whiteBoardId}`}
      className="w-full h-full"
    />
  );
};

export default WhiteBoardPage;
