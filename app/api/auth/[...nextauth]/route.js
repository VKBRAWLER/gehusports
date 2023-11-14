import User from "@models/user";
import { ConnectToDB } from "@utils/database";
import { connect } from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials, req) {
        const { email } = credentials;
        ConnectToDB();
        const user = await User.findOne({ email });
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
