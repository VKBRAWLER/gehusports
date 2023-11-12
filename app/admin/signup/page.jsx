"use client";
import { useState, useEffect } from 'react';
import { signIn, getProviders, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignUpPage = () => {
  const {data: session} = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  const setUpProviders = async () => {
    const response = await getProviders();
    setProviders(response);
  }
  useEffect(() => {
    setUpProviders();
  }, [session])
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Done");
  };
  if (!session) {
  return (
    <main className='flex items-center justify-center'>
        <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In to Gehu Sports</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded py-2 px-3" />
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-500 text-sm">Forget Password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Sign In</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm">Or sign up with</p>
          {providers && Object.values(providers).map((provider) => {
            return (
              <button onClick={() => signIn(provider.id)} className="bg-red-500 text-white py-2 px-4 mt-2 rounded" key={provider.name}>{provider.name}</button>
            )
          })}
        </div>
        <div className="mt-4 text-center">
          <Link href={'/admin/signup'} className="text-gray-500 text-sm">Already a user? <span className="text-blue-500">Sign Up</span></Link>
        </div>
      </div>
    </main>
  )
        }
  else {
    router.push('/admin');
  }
};

export default SignUpPage;