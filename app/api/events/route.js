import Events from "@models/events";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(request) {
    let events = { event_code, title, start_date, end_date, poster_image, bg_image }
    events = await request.json();
    await ConnectToDB();
    await Events.create(events);
    return NextResponse.json({ message: "Event created successfully"}, {status: 200});
}

export async function GET(request) {
    await ConnectToDB();
    const events = await Events.find({}); // find all events
    return NextResponse.json(events, {status: 200}); // return the response
}