import { NextResponse } from "next/server";
import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/database";
import axios from "axios";
import { uuidv4 } from "@/lib/utils";

export async function POST(req) {
  try {
    const { serverId, channelId, question } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const uuit = uuidv4();

    await axios.post("http://172.235.10.135:8000/conversation", {
      human_input: question,
      idx: uuit,
    });

    const gptQuestion = await db.GPT.create({
      data: {
        idx: uuit,
        profileId: profile.id,
        channelId,
        serverId,
        question,
        answer: "",
      },
    });

    return NextResponse.json(gptQuestion);
  } catch (error) {
    console.error(error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
