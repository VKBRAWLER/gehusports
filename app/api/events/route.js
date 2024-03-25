import Events from "@models/events";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";
import { Grade1Auth } from "../users/auth/route";

export async function POST(request) {
    let { _id, title, start_date, end_date, poster_image, created_by } = await request.json();
    await ConnectToDB();
    const allow = await Grade1Auth(created_by);
    const count = await Events.countDocuments({});
    _id = `${title[0]}${count+1}`;
    if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
    created_by = allow.name;
    await Events.create({ _id, title, start_date, end_date, poster_image, created_by });
    return NextResponse.json({ message: "Event created successfully", success: true }, { status: 200 });
}

export async function GET() {
    await ConnectToDB();
    const events = await Events.find({}); // find all events
    return NextResponse.json(events, { status: 200 }); // return the response
}

export async function PUT(NextRequest) {
    try {
      await ConnectToDB();
      let { title, start_date, end_date, poster_image, visible, last_updated_by, _id } = await NextRequest.json();
      const allow = await Grade1Auth(last_updated_by);
      if (!allow) return NextResponse.json({ message: "Unauthorized Request" }, { status: 401 });
      const last_updated_at = new Date();
      last_updated_by = allow.name;
      const event = await Events.findByIdAndUpdate( _id, 
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

export async function DELETE(request) {
    const { _id, deleted_by } = await request.json();
    await ConnectToDB();
    const allow = await Grade1Auth(deleted_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
    await Events.deleteOne({ _id });
    return NextResponse.json({ message: "Event deleted successfully", success: true }, { status: 200 });
}