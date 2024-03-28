import { ConnectToDB } from "@utils/database";
import User from "@models/user";
import { NextRequest, NextResponse } from "next/server";

ConnectToDB();

export async function PUT(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { name, image, user_code } = reqBody;
    console.log(reqBody);
    if (!user_code) return NextResponse.json({ error: 'User code not found', success: false }, { status: 400 });
    const userExist = await User.findOne({ user_code });
    if (!userExist) return NextResponse.json({ error: 'User not found', success: false }, { status: 404 });
    if (name && name.length) { userExist.name = name; }
    if (image && image.length) { userExist.image = image; }
    await userExist.save();
    return NextResponse.json({ message: "User Profile Updated successfully" }, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
  }
}