import { NextResponse } from "next/server";
import { currentProfile } from "@/lib/currentProfile";
import { uuidv4 } from "@/lib/utils";
import { db } from "@/lib/database";
import { Role } from "@prisma/client";

export async function POST(req) {
  try {
    const { name, description,category } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        description,
        category,
        inviteCode: uuidv4(),
        imageUrl: "https://picsum.photos/200",
        channels: {
          create: [
            {
              name: "general",
              profileId: profile.id,
            },
            {
              name: "voice",
              profileId: profile.id,
              type: "VOICE",
            },
            {
              name: "g-whiteboard",
              profileId: profile.id,
              type: "WHITEBOARD",
            },
            {
              name: "editor",
              profileId: profile.id,
              type: "CODE",
            },
            {
              name: "AI1",
              profileId: profile.id,
              type: "GPT",
            },
          ],
        },
        members: {
          create: {
            profileId: profile.id,
            role: Role.ADMIN,
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.error(error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
