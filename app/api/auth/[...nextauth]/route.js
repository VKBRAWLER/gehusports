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
      async authorize(credentials) {
        const { email } = credentials;
        await ConnectToDB();
        const user = await User.findOne({ email });
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      // session.user.id = sessionUser._id.toString();
      // This code updates the session user object with the data from the user document
      // retrieved from the database.
      session.user = { ...session.user, ...sessionUser._doc };
      delete session.user.password;
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await ConnectToDB();
        // check if user already exists
        let newUser = await User.findOne({ email: user.email });
        // if not, create a new document and save user in MongoDB
        if (!newUser) {
          newUser = new User({
            email: user.email,
          });
        }
        if (profile) {
          newUser.image = await profile.picture;
          if (!newUser.name) {
            newUser.name = await profile.name;
          }
        }
        if (!newUser.user_code) {
          newUser.user_code = newUser.email.split('@')[0] + process.env.HASH_TOKEN;
        }
        await newUser.save();
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
