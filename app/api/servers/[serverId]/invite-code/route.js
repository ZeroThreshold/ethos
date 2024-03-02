import { initProfile } from "@/lib/init-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/database";
import { uuidv4 } from "@/lib/utils";

export async function PATCH(req, { params }) {
  try {
    const profile = await initProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.serverId) {
      return new NextResponse("Server Id not Found", { status: 400 });
    }

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uuidv4(),
      },
    });
    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER]", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
