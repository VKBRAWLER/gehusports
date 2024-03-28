import { ConnectToDB } from "@utils/database";
import { NextResponse } from "next/server";
import User from "@models/user";

export async function GET(NextRequest) {
  try {
    // Connect to the database
    await ConnectToDB();

    // Retrieve all user information
    const users = await User.find();

    // Return the user information in JSON format
    return NextResponse.json(users);
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
    return NextResponse.json({message: error.message}, {status: 500});
  }
}