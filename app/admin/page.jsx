"use client"
import { useSession, signOut } from "next-auth/react";
import Auth from "@components/Auth";
import Provider from "@components/Provider";
import Link from "next/link";
const AdminPage = () => {
  const { data: session } = useSession();
  console.log(session)

  return (
    session &&
    <main className="w-full p-10">
      <section className="w-full md:h-72 glassmorphic rounded-3xl overflow-hidden flex flex-wrap md:flex-nowrap">
        <img src={session?.user.image} alt="" className="w-full md:w-auto md:h-full rounded-full p-8 md:p-2" />
        <article className="w-full p-10 flex flex-col gap-2 text-white">
          <p className="lg:text-5xl text-3xl">{session?.user.name}</p>
          <p className="lg:text-3xl text-xl md:ml-4">{session?.user.role}</p>
          <p className="lg:text-3xl text-xl md:ml-4">{(session?.user.is_verfied) ? <span className="text-green-600">Verified</span> : <span className="text-red-600">Not Verified</span>}</p>
          <div className="flex justify-evenly mt-5 flex-wrap gap-6">
            <Link href={'/admin/userlist'} className="bg-blue-500 p-3 rounded-3xl lg:w-32 w-28 text-center">UserList</Link>
            <Link href={'/admin/events'} className="bg-blue-500 p-3 rounded-3xl lg:w-32 w-28 text-center">EventList</Link>
            <Link href={'/admin/profile'} className="bg-blue-500 p-3 rounded-3xl lg:w-32 w-28 text-center">Profile</Link>
            <button onClick={signOut} className="bg-blue-500 p-3 rounded-3xl lg:w-32 w-28 text-center">Sign Out</button>
          </div>
        </article>
      </section>
    </main>
  )
}
export default function () {
  return (
    <Provider>
      <Auth>
        <AdminPage />
      </Auth>
    </Provider>
  )
}
