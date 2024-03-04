import { ConnectToDB } from "@utils/database"
import Sports from "@models/sports";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  await ConnectToDB();
  const sport = await Sports.findById(params.sport_code);
  if (!sport) return NextResponse.json({ message: "Sport not found", exist: false }, { status: 404 });
  if (sport.event_code !== params.event_code) return NextResponse.json({ message: "Event not match" }, { status: 404 });
  return NextResponse.json(sport, { status: 200 });
}