"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const AdminPage = () => {
  const ddata = useSession();
  const {data: session} = useSession();

  return (
    <>
    {session &&
    <main>
      <p className="text-3xl font-bold text-center">Admin Page</p>
      <p className="text-center font-">Admin Tube</p>
      <p>Your name: {session?.user.name}</p>
      <p>Your email: {session?.user.email}</p>
      <img src={session?.user.image} />
      <button onClick={signOut} className="text-center text-3xl bg-blue-300 p-3 rounded-xl">Sign Out</button>
      <p className="text-white text-5xl">{Date(session.expires)}</p>
      <p className="text-white text-5xl">{}</p>
    </main>
    }
  </>
  )
}
export default AdminPage;