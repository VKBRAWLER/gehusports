import Events from "@models/events";
import User from "@models/user";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";

async function NOTverified(requester_code) {
    if (!requester_code) return true;
    const userExist = await User.findOne({ user_code: requester_code });
    if (!userExist) return true;
    if (!userExist.is_verfied) return true;
    if (userExist.role == "developer"||userExist.role == "teacher"||userExist.role == "organising member") return false;
    else return true;
}

export async function POST(request) {
    let { _id, title, start_date, end_date, poster_image, bg_image, created_by } = await request.json();
    await ConnectToDB();
    const allow = await NOTverified(created_by);
    if (allow) return NextResponse.json({ message: "Unauthorized Request" }, { status: 401 });
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
    const allow = await NOTverified(deleted_by);
    if (allow) return NextResponse.json({ message: "Unauthorized Request" }, { status: 401 });
    await Events.deleteOne({ _id });
    return NextResponse.json({ message: "Event deleted successfully" }, { status: 200 });
}