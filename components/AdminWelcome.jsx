"use client";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])
  // console.log(providers);
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
  {providers && Object.values(providers).map((provider) => {
    return (
      <div key={provider.name}>
        <button onClick={() => signIn(provider.id)} className="text-center text-3xl bg-blue-300 p-3 rounded-xl">Sign In</button>
      </div>
    )
  })}
  </>
  }
  </>
  )
}
export default AdminPage;