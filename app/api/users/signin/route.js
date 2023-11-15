import { ConnectToDB } from "@utils/database";
import User from "@models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

ConnectToDB();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { email, password } = reqBody;
    console.log(reqBody);
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return NextResponse.json({ message: 'User does not Exist', success: false }, { status: 400 });
    }
    const validPassword = await bcrypt.compare(password, userExist.password);
    if (!validPassword) {
      return NextResponse.json({ message: 'Invalid Password', success: false }, { status: 400 });
    }
    return NextResponse.json({ message: "User Logged In Successfully", success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false }, { status: 500 });
  }
}