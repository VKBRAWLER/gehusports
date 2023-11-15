import Sports from "@models/sports";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(request) {
    let { _id, title, event_code, start_date, end_date, poster_image, Register } = await request.json();
    await ConnectToDB();
    await Sports.create({ _id, title, event_code, start_date, end_date, poster_image, Register });
    return NextResponse.json({ message: "Sport created successfully" }, { status: 200 });
}
export async function GET(request) {
    await ConnectToDB();
    const sports = await Sports.find({});
    return NextResponse.json(sports, { status: 200 });
}

export async function DELETE(request) {
    const { _id } = await request.json();
    await ConnectToDB();
    await Sports.deleteOne({ _id });
    return NextResponse.json({ message: "Sport deleted successfully" }, { status: 200 });
}