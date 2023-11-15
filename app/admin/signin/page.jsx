"use client";
import { useState, useEffect } from 'react';
import { signIn, getProviders, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignInPage = () => {
  const {data: session} = useSession();
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  const updateCredentials = (e) => {
    if (e) setCredentials({...credentials, [e.target.id]: e.target.value});
  }
  const setUpProviders = async () => {
    const response = await getProviders();
    setProviders(response);
  }
  useEffect(() => {
    setUpProviders();
    updateCredentials(0);
  }, [session])
  const signInCred = async () => {
    const response = await fetch('/api/users/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json();
    if (!data.success) {
      alert(data.message);
    }
    else {
      signIn('credentials', {
      email: credentials.email,
      // callbackUrl: false,
      callbackUrl: `${window.location.origin}/admin`
      })
    }
  }
  const checkForm = () => {
    updateCredentials(0);
    if (credentials.email === '') {
      alert('Email is required');
    }
    else if (credentials.email.indexOf('@') === -1 || credentials.email.indexOf('.') === -1) {
      alert('Email is invalid');
    }
    else if (credentials.password === '') {
      alert('Password is required');
    }
    else {
      signInCred();
    }
  }
  const SubmitEvent = (event) => {
    event.preventDefault();
    checkForm();
  };
  if (!session) {
  return (
    <main className='flex items-center justify-center'>
        <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In to Gehu Sports</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full border rounded py-2 px-3" onChange={(e)=>{updateCredentials(e)}} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" className="w-full border rounded py-2 px-3" onChange={(e)=>{updateCredentials(e)}} />
          </div>
          <button onClick={(e)=>{SubmitEvent(e)}} className="w-full bg-blue-500 text-white py-2 px-4 rounded">Sign In</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm">Or sign up with</p>
          {providers && Object.values(providers).map((provider) => {
            if (provider.id === 'credentials') return null;
            return (
              <button onClick={() => signIn(provider.id)} className="bg-red-500 text-white py-2 px-4 mt-2 rounded" key={provider.name}>{provider.name}</button>
            )
          })}
        </div>
        <div className="mt-4 text-center">
          <Link href={'/admin/signup'} className="text-gray-500 text-sm">New in Here? <span className="text-blue-500">Sign Up</span></Link>
        </div>
      </div>
    </main>
  )
        }
  else {
    router.push('/admin');
    return (
      <div></div>
    )
  }
};

export default SignInPage;