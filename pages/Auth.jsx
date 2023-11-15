"use client";
import Loading from "@app/loading";
import { useSession } from "next-auth/react";
import Link from "next/link";
function Auth({ children }) {
  const { status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        {children}
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div>
        You must be signed in to access this page
  <Link href={'/admin/signin'} className="text-center text-3xl bg-blue-300 p-3 rounded-xl">Sign In</Link>

      </div>
    );
  }

  return (
      <Loading />
  );
}

export default Auth;
