import { ConnectToDB } from "@utils/database"
import Sports from "@models/sports";
import User from "@models/user";
import { NextRequest, NextResponse } from "next/server";
import { Grade1Auth } from "@app/api/users/auth/route";

export const GET = async (NextRequest, { params }) => {
  await ConnectToDB();
  const sport = await Sports.findById(params.sport_code);
  if (!sport) return NextResponse.json({ message: "Sport not found", exist: false }, { status: 404 });
  if (sport.event_code !== params.event_code) return NextResponse.json({ message: "Event not match" }, { status: 404 });
  return NextResponse.json(sport, { status: 200 });
}
export async function DELETE(request) {
  const { _id, deleted_by } = await request.json();
  await ConnectToDB();
  const allow = await Grade1Auth(deleted_by);
  if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
  await Sports.deleteOne({ _id });
  return NextResponse.json({ message: "Sport deleted successfully", success: true }, { status: 200 });
}