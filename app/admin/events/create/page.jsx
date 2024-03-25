"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Provider from '@components/Provider';
import Auth from '@components/Auth';
import Verified from '@components/Verified';
import RoleAuth from '@components/RoleAuth';

const EventCreatePage = () => {
	const { data: session } = useSession();
	const [eventDetails, setEventDetails] = useState({ title: '', start_date: '', end_date: '', poster_image: '', created_by: session?.user.user_code });
	const updateEventDetails = (e) => {
		if (e) setEventDetails({ ...eventDetails, [e.target.id]: e.target.value });
		console.log(eventDetails);
	}
  const saveChanges = async () => {
		let newReqBody = {};
		for (let key in eventDetails) {
			if (!eventDetails[key]) continue;
			if (typeof eventDetails[key] === 'string') {
				eventDetails[key] = eventDetails[key].trim();
				if (eventDetails[key] === '') continue;
			}
			newReqBody[key] = eventDetails[key];
		}
		if (!newReqBody.title) {
			alert(`No changes made`);
			return;
		}
		const response = await fetch(`/api/events`, {
			method: 'POST',
			body: JSON.stringify(eventDetails),
		});
		const data = await response.json();
		if (data.success) {
      window.location.href = '/admin/events';
		}
		else {
			alert(`Error: ${data.message}`);
		}
	}

  return (
    <main>
      <section className='w-full p-2 flex flex-wrap justify-center gap-4'>
      <form action={saveChanges} className="my-5 w-full max-w-[104rem] lg:h-96 rounded-2xl border-4 border-white p-2 lg:flex glassmorphic relative">
        <article className="w-full p-2 flex flex-col gap-1 lg:gap-5">
          <div>
            <label htmlFor="start_date" className="text-xl font-bold mx-5">Start Date:</label>
            <input type="date" id="start_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateEventDetails(e) }} />
          </div>
          <div>
            <label htmlFor="end_date" className="text-xl font-bold mx-5">End Date:</label>
            <input type="date" id="end_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateEventDetails(e) }} />
          </div>
          <div>
            <label htmlFor="title" className="text-xl font-bold mx-5">Title:</label>
            <input type="text" id="title" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateEventDetails(e) }} />
          </div>
          <div>
            <label htmlFor="poster_image" className="text-xl font-bold mx-5">Image URL:</label>
            <input type="text" id="poster_image" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateEventDetails(e) }} />
          </div>
          <button type="submit" className="lg:absolute w-full lg:w-auto bottom-2 right-2 bg-slate-500 my-1 lg:m-0 rounded-xl border-2 p-2">Create Event</button>
        </article>
      </form>
      </section>
    </main>
  );
};

export default function () {
	return (
		<Provider>
			<Auth>
				<Verified>
					<RoleAuth role={
						['developer', 'teacher', 'organising member']}>
						<EventCreatePage />
					</RoleAuth>
				</Verified>
			</Auth>
		</Provider>
	)
};