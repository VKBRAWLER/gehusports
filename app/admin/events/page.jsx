"use client";
import Verified from '@components/Verified';
import RoleAuth from '@components/RoleAuth';
import Auth from '@components/Auth';
import { useState, useEffect } from 'react';
import Provider from '@components/Provider';
import EventBox from '@components/EventBox';
const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const response = await fetch('/api/events');
    const data = await response.json();
    const sortedEvents = data.sort((a, b) => {
			if (a.start_date === null) {
				return -1; // null stays first
			} else if (b.start_date === null) {
				return 1; // null stays first
			} else {
				return new Date(b.start_date) - new Date(a.start_date); // Latest events in decreasing order
			}
		});
    setEvents(sortedEvents);
  }
  useEffect(() => {
    fetchEvents();
  }, [])
  return (
    <main>
      <section className="flex justify-center flex-wrap">
        {events.length ?
          events.map((i) => { return( <EventBox object={i} key={i._id} userType={'admin'} /> ) }
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