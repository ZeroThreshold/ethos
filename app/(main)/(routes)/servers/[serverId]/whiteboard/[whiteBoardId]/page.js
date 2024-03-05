const WhiteBoardPage = ({ params }) => {
  let id = params.whiteBoardId.split("_")[0];
  let username = params.whiteBoardId.split("_")[1];
  return (
    <iframe
      src={`https://cothink.onrender.com/?whiteboardid=${id}&username=${username}`}
      className="w-full h-full"
    />
  );
};

export default WhiteBoardPage;
