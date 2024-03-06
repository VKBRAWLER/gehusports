import Events from "@models/events";
import { ConnectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";
import User  from "@models/user";
import { Grade1Auth } from "@app/api/users/auth/route";

export async function GET(NextRequest, { params }) {
  try {
    await ConnectToDB();
    const event = await Events.findById(params.event_code);
    if (!event) return NextResponse.json({ message: "Event not found", data: false }, { status: 404 });
    return NextResponse.json({ data: event }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}