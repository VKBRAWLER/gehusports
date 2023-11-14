"use client";
import Loading from "@app/loading";
import { useSession } from "next-auth/react";
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
      </div>
    );
  }

  return (
      <Loading />
  );
}

export default Auth;
