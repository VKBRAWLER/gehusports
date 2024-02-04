"use client";
import Auth from '@components/Auth';
import RoleAuth from '@components/RoleAuth';
import Verified from '@components/Verified';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Provider from '@components/Provider';
const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    setEvents(data);
    console.log(data);
  }
  useEffect(() => {
    fetchEvents();
  }, [])
  return (
    <main>
      <section className="flex justify-center flex-wrap">
        {events.length ?
          events.map((i) => {
            return (
              <Link href={`/events/${i._id}`} className="m-2 w-full max-w-md md:max-w-6xl md:h-64 lg:h-80 rounded-2xl border-4 p-2 md:flex bg-black relative" key={i._id}>
                <img className="w-full md:w-auto rounded-2xl" src={i.poster_image} alt="image not found" />
                <article className="w-full p-2 text-white">
                  <h1 className="text-3xl font-bold">Umang Khel</h1>
                  <p className="text-sm">Organized by: {i.created_by}</p>
                  <p className="text-sm">Created on: {Date(i.updated_at)}</p>
                  <p className="text-sm">Last Upadated on: 10 May 2005</p>
                  <p className="text-sm">10 events</p>
                  <p>No. of Players Registered: {i.event_code}</p>
                </article>
                <button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 my-1 md:m-0 rounded-xl border-2 p-2 lg:hover:text-lg">Browse Event</button>
                <button className="md:absolute w-full md:w-auto bottom-2 right-36 bg-slate-500 my-1 md:m-0 rounded-xl border-2 p-2 lg:hover:text-lg">Edit Event</button>
              </Link>
            )
          }
          )
          : <p className="text-3xl font-bold">No Events Found</p>}
      </section>
    </main>
  )
}

export default function () {
  return (
    <Provider>
      <Auth>
        <Verified>
          <RoleAuth role={['developer', 'teacher', 'organising member']}>
            <AdminEventsPage />
          </RoleAuth>
        </Verified>
      </Auth>
    </Provider>
  )
};