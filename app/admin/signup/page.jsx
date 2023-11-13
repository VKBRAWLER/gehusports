"use client";
import { useState, useEffect } from 'react';
import { signIn, getProviders, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignUpPage = () => {
  const {data: session} = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  const setUpProviders = async () => {
    const response = await getProviders();
    setProviders(response);
  }
  useEffect(() => {
    setUpProviders();
  }, [session])
  const signUp = async () => {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    }
    else {
      alert('Sign up successful');
      router.push('/admin');
    }
  }
  const checkForm = () => {
    console.log({email, password, confirmpassword});
    if (email === '') {
      alert('Email is required');
    }
    else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('Email is invalid');
    }
    else if (password === '') {
      alert('Password is required');
    }
    else if (password.length < 6) {
      alert('Password must be at least 6 characters');
    }
    else if (password !== confirmpassword) {
      alert('Passwords do not match');
    }
    else {
      signUp();
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
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up to Gehu Sports</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full border rounded py-2 px-3" onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" className="w-full border rounded py-2 px-3" onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmpassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirmpassword" className="w-full border rounded py-2 px-3" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
          </div>
          <button onClick={(e)=>{SubmitEvent(e)}} className="w-full bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
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
          <Link href={'/admin/signin'} className="text-gray-500 text-sm">Already a user? <span className="text-blue-500">Sign In</span></Link>
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

export default SignUpPage;