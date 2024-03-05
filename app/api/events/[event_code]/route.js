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
export async function PUT(NextRequest, { params }) {
  try {
    await ConnectToDB();
    let { title, start_date, end_date, poster_image, visible, last_updated_by } = await NextRequest.json();
    const allow = await Grade1Auth(last_updated_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request" }, { status: 401 });
    const last_updated_at = new Date();
    last_updated_by = allow.name;
    const event = await Events.findByIdAndUpdate(params.event_code, 
      { title, start_date, end_date, poster_image, visible, last_updated_by, last_updated_at }, {
      new: true,
      runValidators: true,
    });
    if (!event) return NextResponse.json({ message: "Event not found" }, { status: 404 });
  
    return NextResponse.json({ message: "Event updated successfully", success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}