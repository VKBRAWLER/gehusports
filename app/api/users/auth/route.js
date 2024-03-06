import User from "@models/user";
import { ConnectToDB } from "@utils/database";
export async function Grade1Auth(requester_code) {
  ConnectToDB();
  const user = await verifiedUser(requester_code);
  if (!user) return false; // if user does not exist
  if (user.role == "developer"||
      user.role == "teacher"||
      user.role == "organising member"
      ) return user;
  else return false;
}
export async function Grade3Auth(requester_code) {
  return await verifiedUser(requester_code);
}
async function verifiedUser(requester_code) {
  if (!requester_code) return false; // if requester_code is not provided
  const userExist = await User.findOne({ user_code: requester_code }); // find user by requester_code
  if (!userExist) return false; // if user does not exist
  if (userExist.is_verfied) return userExist; // if user is verified
  else return false; // if user is not verified
}