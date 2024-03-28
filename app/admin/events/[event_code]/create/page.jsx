"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Provider from "@components/Provider";
import Auth from "@components/Auth";
import Verified from "@components/Verified";
import RoleAuth from "@components/RoleAuth";
import Loading from "@app/loading";
import { useSession } from "next-auth/react";
const CreateSportsPage = () => {
  const { event_code } = useParams();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [eventStatus, setEventStatus] = useState();
  const [sportDetails, setSportDetails] = useState({ event_code: event_code, created_by: session?.user.user_code });
  const SearchEvent_code = async () => {
    const response = await fetch(`/api/events/${event_code}`);
    const data = await response.json();
    setLoading(false);
    setEventStatus(data.data);
  }
  const createSport = async () => {
    const response = await fetch('/api/sports', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sportDetails)
    })
    const data = await response.json();
    if (data.success) {
      alert('Sport Created');
      window.location.href = `/admin/events/${event_code}`;
    }
    else {
      alert(`Error: ${data.message}\nSport Not Created`);
    }
  }
  const updateSportDetails = (e) => {
    setSportDetails({ ...sportDetails, [e.target.id]: e.target.value });
  }
  useEffect(() => {
    SearchEvent_code();
  }, [])
  if (loading) return <Loading />
  if (!eventStatus) return <p className="text-3xl font-bold text-center">Events Not Found</p>;
  return (
    <main className="flex justify-center ">
      <form action={createSport} className='p-8 w-full h-[33rem] max-w-[60rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative flex flex-col gap-6'>
        <h1 className="font-bold text-center text-3xl">Create a new Sport in {eventStatus.title}</h1>
        <div>
          <label htmlFor="title" className="text-xl font-bold mx-5">Title:</label>
          <input type="text" id="title" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="poster_image" className="text-xl font-bold mx-5">Image URL:</label>
          <input type="text" id="poster_image" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="start_date" className="text-xl font-bold mx-5">Start Date:</label>
          <input type="date" id="start_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="end_date" className="text-xl font-bold mx-5">End Date:</label>
          <input type="date" id="end_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <button type="submit" className="lg:absolute w-full lg:w-auto bottom-2 right-2 bg-slate-500 lg:m-0 rounded-xl border-2 p-2">Create</button>
      </form>
    </main>
  )
}
export default function () {
  return (
    <Provider>
      <Auth>
        <Verified>
          <RoleAuth role={
            ['developer', 'teacher', 'organising member']}>
            <CreateSportsPage />
          </RoleAuth>
        </Verified>
      </Auth>
    </Provider>
  )
};