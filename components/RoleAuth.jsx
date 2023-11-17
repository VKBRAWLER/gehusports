"use client";
import Loading from "@app/loading";
import { useSession } from "next-auth/react";
const RoleAuth = ({ children, role }) => {
  const { data: session } = useSession();
  if (role.includes(session?.user.role)) {
  return (
      <>{children}      </>
    );
  }
  if (!role.includes(session?.user.role)) {
  return (
      <>You are not Authorized to visit this page</>
    );
  }
  return (
    <Loading />
  );

}

export default RoleAuth;