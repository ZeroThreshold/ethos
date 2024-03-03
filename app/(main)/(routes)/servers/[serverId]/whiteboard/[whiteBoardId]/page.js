const WhiteBoardPage = ({ params }) => {
  let id = params.whiteBoardId.split("_")[0];
  let username = params.whiteBoardId.split("_")[1];
  return (
    <iframe
      src={`http://172.235.9.247:8080/?testwhiteboard/?whiteboardid=${id}&username=${username}`}
      className="w-full h-full"
    />
  );
};

export default WhiteBoardPage;
