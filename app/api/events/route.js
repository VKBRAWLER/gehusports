import Events from "@models/events";
import User from "@models/user";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";

async function verified(requester_code) {
    if (!requester_code) return false;
    const userExist = await User.findOne({ user_code: requester_code });
    if (!userExist) return false;
    if (!userExist.is_verfied) return false;
    if (userExist.role == "developer"||userExist.role == "teacher"||userExist.role == "organising member") return userExist.name;
    else return false;
}

export async function POST(request) {
    let { _id, title, start_date, end_date, poster_image, bg_image, created_by } = await request.json();
    await ConnectToDB();
    const allow = await verified(created_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request" }, { status: 401 });
    created_by = allow;
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
    const allow = await verified(deleted_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
    await Events.deleteOne({ _id });
    return NextResponse.json({ message: "Event deleted successfully", success: true }, { status: 200 });
}