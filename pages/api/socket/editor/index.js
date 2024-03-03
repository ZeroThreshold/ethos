export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { content } = req.body;
    const { serverId, editorId } = req.query;

    if (!serverId) {
      return res.status(400).json({ error: "Server ID missing" });
    }

    const channelKey = `editor:${editorId}:messages`;

    res?.socket?.server?.io?.emit(channelKey, content);

    return res.status(200).json("OK");
  } catch (error) {
    console.log("[MESSAGES_POST]", error);
    return res.status(500).json({ message: "Internal Error" });
  }
}
