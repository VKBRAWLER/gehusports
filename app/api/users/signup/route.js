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
    if (userExist) {
      return NextResponse.json({ error: 'User already exists', success: false, userExist: userExist }, { status: 400 });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "User created Successfully", success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
  }
}