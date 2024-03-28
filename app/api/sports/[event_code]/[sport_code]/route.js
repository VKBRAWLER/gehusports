import { ConnectToDB } from "@utils/database"
import Sports from "@models/sports";
import User from "@models/user";
import Events from "@models/events";
import { NextResponse } from "next/server";
import { Grade1Auth } from "@app/api/users/auth/route";

export const GET = async ( request, { params }) => {
  await ConnectToDB();
  const sport = await Sports.findById(params.sport_code);
  if (!sport) return NextResponse.json({ message: "Sport not found", exist: false }, { status: 404 });
  if (sport.event_code !== params.event_code) return NextResponse.json({ message: "Event not match" }, { status: 404 });
  return NextResponse.json(sport, { status: 200 });
}
