"use client";
import '@styles/globals.css';
import Auth from "@components/Auth";
import { useSession } from "next-auth/react";
import Provider from '@components/Provider';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [EditingMode, setEditingMode] = useState(false);
  const [profile, setProfile] = useState({ name: '', image: '', user_code: session?.user.user_code });
  const updateProfile = (e) => {
    if (e) setProfile({ ...profile, [e.target.id]: e.target.value });
  }
  const saveChanges = async () => {
    const res = await fetch('/api/users/updateprofile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    });
    router.push('/admin');
  }
  return (
    <main className="flex justify-center p-2 text-center">
      <section className='w-full h-fit max-w-lg glassmorphic rounded-3xl p-10'>
        <img src={profile.image === '' ? session?.user.image : profile.image} alt="" className="w-full rounded-full mb-5" />
        {EditingMode ?
        <form action={saveChanges} className='mt-10 flex justify-center flex-col gap-8 text-center'>
          <input className='h-10 w-full text-lg rounded-2xl p-4' type="text" id='name' placeholder={session?.user.name} onChange={(e) => { updateProfile(e) }} />
          <input className='h-10 w-full text-lg rounded-2xl p-4' type="text" id='image' placeholder={'Enter the URL of the image here'} onChange={(e) => { updateProfile(e) }} />
          <p className='text-red-600 bg-yellow-50 rounded-2xl'>Keep the input blank if do not wish to change</p>
          <button type='submit' className='bg-blue-500 p-3 rounded-3xl w-32'>Save changes</button>
        </form>
        : <>
          <p className="lg:text-5xl text-3xl mb-5">{session?.user.name}</p>
          <button onClick={() => { setEditingMode(true); }} className='bg-blue-500 p-3 rounded-3xl w-32'>Edit Profile</button>
        </>
        }
      </section>
    </main>
  );
};

export default function () {
  return (
    <Provider>
      <Auth>
        <ProfilePage />
      </Auth>
    </Provider>
  )
}