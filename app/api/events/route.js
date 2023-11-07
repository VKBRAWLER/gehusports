import Events from "@models/events";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";
export async function POST(request) {
    const { event_code, title, start_date, end_date, poster_image, bg_image } = await request.json();
    await ConnectToDB();
    await Events.create({ event_code, title, start_date, end_date, poster_image, bg_image });
    return NextResponse.json({ message: "Event created successfully"}, {status: 200});
}