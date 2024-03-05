import Events from "@models/events";
import User from "@models/user";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";
import { Grade1Auth } from "../users/auth/route";

export async function POST(request) {
    let { _id, title, start_date, end_date, poster_image, bg_image, created_by } = await request.json();
    await ConnectToDB();
    const allow = await Grade1Auth(created_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request" }, { status: 401 });
    created_by = allow.name;
    await Events.create({ _id, title, start_date, end_date, poster_image, bg_image, created_by });
    return NextResponse.json({ message: "Event created successfully" }, { status: 200 });
}

export async function GET() {
    await ConnectToDB();
    const events = await Events.find({}); // find all events
    return NextResponse.json(events, { status: 200 }); // return the response
}

export async function DELETE(request) {
    const { _id, deleted_by } = await request.json();
    await ConnectToDB();
    const allow = await Grade1Auth(deleted_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
    await Events.deleteOne({ _id });
    return NextResponse.json({ message: "Event deleted successfully", success: true }, { status: 200 });
}