import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Example logic
    const reply = `You said: ${message}`;

    return NextResponse.json(
      { reply },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
