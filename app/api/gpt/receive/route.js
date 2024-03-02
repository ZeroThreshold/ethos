import { NextResponse } from "next/server";
import { db } from "@/lib/database";

export async function POST(req) {
  try {
    const { idx, answer } = await req.json();

    const getAnswer = await db.GPT.update({
      where: {
        idx: idx,
      },
      data: {
        answer,
      },
    });

    return NextResponse.json(getAnswer);
  } catch (error) {
    console.error(error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
