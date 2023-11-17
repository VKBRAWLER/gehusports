"use client";
import Loading from "@app/loading";
import { useSession } from "next-auth/react";
import Link from "next/link";
const Auth = ({ children }) => {
  const { status } = useSession();
  if (status === "authenticated") {
    return (
      <>{children}</>
    );
  }
  if (status === "unauthenticated") {
    return (
      <main>
        <h1 className="text-center text-3xl">You must be signed in to access this page</h1>
        <Link href={'/admin/signin'} className="text-center text-3xl bg-blue-300 p-3 rounded-xl">Sign In</Link>
      </main>
    );
  }

  return (
    <Loading />
  );
}
export default Auth;