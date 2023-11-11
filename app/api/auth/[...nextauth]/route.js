import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { ConnectToDB } from '@utils/database';
import User from '@models/user';
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({session}) {
    const sessionUser = await User.findOne({ email: session.user.email });
    session.user.id = sessionUser._id.toString();
    return session;
  },
  async jwt(token, user, account, profile, isNewUser) {
    return token;
  },
  async signIn({ profile }) {
    try {
      await ConnectToDB();
      const userExists = await User.findOne({ email: profile.email });
      if (!userExists) {
        await User.create({
          email: profile.email,
          name: profile.name,
          image: profile.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  async signOut() {
    return true;
  },
})

export { handler as GET, handler as POST };