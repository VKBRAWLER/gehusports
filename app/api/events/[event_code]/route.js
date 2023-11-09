import Events from "@models/events";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectToDB()
    const event = await Events.findById(params.event_code);
    if (!event) return NextResponse.json({ message: "Event not found", exist: false }, { status: 404 });
    return NextResponse.json({ exist: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}