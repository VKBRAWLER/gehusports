import Events from "@models/events";
import Sports from "@models/sports";
import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";
import { Grade1Auth ,Grade3Auth } from "../users/auth/route";
import User from "@models/user";

export async function POST(request) {
  try {
    await ConnectToDB();
    let { title, event_code, start_date, end_date, poster_image, created_by } = await request.json();
    const allow = await Grade3Auth(created_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
    created_by = allow.name;
    const eventExist = await Events.findById(event_code);
    if (!eventExist) return NextResponse.json({ message: "Event does not exist", success: false }, { status: 404 });
    const _id = `${title[0]}${eventExist.sports_count.length + 1}`;
    eventExist.sports_count.push(_id);
    const event = await Events.findByIdAndUpdate( event_code, { sports_count: eventExist.sports_count }, {
        new: true,
        runValidators: true,
      });
    allow.parameters.sport.push(_id);
    const user = await User.findByIdAndUpdate( allow._id , { parameters: allow.parameters }, {
      new: true,
      runValidators: true,
    });
		await Sports.create({ _id, title, event_code, start_date, end_date, poster_image, created_by });
    return NextResponse.json({ message: "Sport created successfully", success: true }, { status: 200 });
  } catch (error) {
      return NextResponse.json({ message: error.message, success: false }, { status: 500 });
  }
}

export async function DELETE(request) {
    try {
      const { _id, deleted_by } = await request.json();
      await ConnectToDB();
      const allow = await Grade1Auth(deleted_by);
      if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
      const sport = await Sports.findById(_id);
      if (!sport) return NextResponse.json({ message: "Sport not found", success: false }, { status: 404 });
      const eventExist = await Events.findById(sport.event_code);
      if (!eventExist) return NextResponse.json({ message: "Event not found", success: false }, { status: 404 });
			let index = eventExist.sports_count.indexOf(_id);
      if (index !== -1) { eventExist.sports_count.splice(index, 1); }
      const event = await Events.findByIdAndUpdate( sport.event_code, { sports_count: eventExist.sports_count }, {
          new: true,
          runValidators: true,
        });
      index = allow.parameters.sport.indexOf(_id);
      if (index !== -1) { allow.parameters.sport.splice(index, 1); }
      const user = await User.findByIdAndUpdate( allow._id , { parameters: allow.parameters }, {
        new: true,
        runValidators: true,
      });
      await Sports.deleteOne({ _id });
      return NextResponse.json({ message: "Sport deleted successfully", success: true }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: error.message, success: false }, { status: 500 });
    }
  }

export async function PUT(request) {
  try {
    let { _id, title, start_date, end_date, poster_image, last_updated_by, register, register_link } = await request.json();
    await ConnectToDB();
    const allow = await Grade3Auth(last_updated_by);
    if (!allow) return NextResponse.json({ message: "Unauthorized Request", success: false }, { status: 401 });
    const last_updated_at = new Date();
    last_updated_by = allow.name;
    const sport = await Sports.findByIdAndUpdate( _id, { title, start_date, end_date, poster_image, last_updated_at, last_updated_by, register, register_link }, {
        new: true,
        runValidators: true,
      });
    return NextResponse.json({ message: "Sport updated successfully", success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false }, { status: 500 });
  }
}