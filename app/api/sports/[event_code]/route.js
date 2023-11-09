import Sports from "@models/sports";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await ConnectToDB()
    const SportsList = await Sports.find({ event_code: params.event_code });
    if (!SportsList.length) return NextResponse.json({ message: "No Sports associated with this event_code"}, { status: 404 });
    return NextResponse.json(SportsList, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}