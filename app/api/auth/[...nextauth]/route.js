import User from "@models/user";
import { ConnectToDB } from "@utils/database";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials, req) {
        const { email } = credentials;
        await ConnectToDB();
        const user = await User.findOne({ email });
        // console.log("user: ", user)
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
    const sessionUser = await User.findOne({ email: session.user.email });
    console.log("sessionUser: ", sessionUser)
    session.user.id = sessionUser._id.toString();
    return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await ConnectToDB();
        // check if user already exists
        const userExists = await User.findOne({ email: user.email });
        // if not, create a new document and save user in MongoDB
        if (!userExists && profile) {
          await User.create({
            email: profile.email,
            name: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        if (profile) {
          const newUser = await User.findOne({ email: profile.email });
          newUser.image = await profile.picture;
          newUser.name = await profile.name.replace(" ", "").toLowerCase();
          await newUser.save();
        }
        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
