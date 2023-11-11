"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const AdminPage = () => {
  const {data: session} = useSession();
  return (
    <>
    {session?.user ?
    <main>
      <p className="text-3xl font-bold text-center">Admin Page</p>
      <p className="text-center font-">Admin Tube</p>
      <p>Your name: {session?.user.name}</p>
      <p>Your email: {session?.user.email}</p>
      <img src={session?.user.image} />
      <button onClick={signOut} className="text-center text-3xl bg-blue-300 p-3 rounded-xl">Sign Out</button>
    </main>
  :
  <>
  <p className="text-center text-3xl">Please Login to access this page</p>
  <Link href={'/admin/signin'} className="text-center text-3xl bg-blue-300 p-3 rounded-xl">Sign In</Link>
  </>
  }
  </>
  )
}
export default AdminPage;