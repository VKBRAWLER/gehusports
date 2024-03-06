"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Provider from "@components/Provider";
import Auth from "@components/Auth";
import Verified from "@components/Verified";
import RoleAuth from "@components/RoleAuth";
import Loading from "@app/loading";
import { formatDate } from "@utils/Time";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
const AdminsSportsPage = () => {            
  const { event_code, sport_code } = useParams();
  const { data: session } = useSession();
  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventStatus, setEventStatus] = useState();
  const [sportDetails, setSportDetails] = useState({});
  const updateEventDetails = (e) => {
    setSportDetails({ ...sportDetails, [e.target.id]: e.target.value });
    console.log(sportDetails);
  }
  const SearchEvent_code = async () => {
    const response = await fetch(`/api/events/${event_code}`);
    const data = await response.json();
    setLoading(false);
    setEventStatus(data.data);
    if (data.data) fetchSport();
  }
  const fetchSport = async () => {
    const response = await fetch(`/api/sports/${event_code}/${sport_code}`);
    const sportsData = await response.json();
    setSport(sportsData);
    console.log(sportsData);
  }
  const EnableRegister = () => {
    const EnableRequest = async () => {
    }
    if (confirm('Are you sure you want to change the registration status?')) { EnableRequest(); }
  } 
  const DeleteEvent = () => {
    const DeleteRequest = async () => {
      const response = await fetch(`/api/sports`, {
        method: 'DELETE',
        body: JSON.stringify({ _id: sport_code, deleted_by: session?.user.user_code }),
        });
      const data = await response.json();
      if (data.success) {
        alert('Event Deleted');
        window.location.href = `/admin/events/${event_code}`;
      }
      else {
        alert(`Error: ${data.message}\nEvent Not Deleted`);
      }
    }
    if (confirm('Are you sure you want to delete this event?')) { DeleteRequest(); }
  }
  useEffect(() => {
    SearchEvent_code();
  }, [])
  if (loading) return <Loading />
  if (!eventStatus) return <p className="text-3xl font-bold text-center">Events Not Found</p>;
  if (!sport) return <Loading />
  return (
    <main className="flex p-2 justify-center gap-2 flex-wrap">
      <section className='p-8 w-80 h-[31rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative'>
        <img className='w-64 h-[17rem]' src={"https://media.discordapp.net/attachments/1162451241872412901/1213367132373516328/WhatsApp_Image_2023-10-31_at_22.56.45_5a95a456.jpg?ex=65f53733&is=65e2c233&hm=ef05d2ef0dfe449198cd695bab88e2ad4eef6c233ad8ff50f36c629f0b6a57df&=&format=webp&width=614&height=671"} alt="Image not found" />
        <h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{sport.title} Tournament</h1>
        <article className="h-[4.5rem]">
          <h2 className='text-xl font-bold mr-2'>Start Date: {formatDate(sport.start_date)}</h2>
          <h2 className='text-xl font-bold mr-2'>End Date: {formatDate(sport.end_date)}</h2>
          <h2 className="text-xl font-bold mr-2">Regestration: {sport.register ? "Open" : "Closed"}</h2>
        </article>
      </section>
      <form className='p-8 flex-grow h-[31rem] max-w-[60rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative flex flex-col gap-6'>
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
				<button type="button" onClick={EnableRegister} className="lg:absolute w-full lg:w-auto bottom-2 left-2 bg-green-500 my-1 lg:m-0 rounded-xl border-2 p-2">{sport.register? "Close": "Open"} registration</button>
				<MdDelete onClick={DeleteEvent} className="w-14 h-12 absolute top-2 right-2 bg-red-300  lg:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2" />
				<button type="submit" className="lg:absolute w-full lg:w-auto bottom-2 right-2 bg-slate-500 lg:m-0 rounded-xl border-2 p-2">Save Changes</button>
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
            <AdminsSportsPage />
          </RoleAuth>
        </Verified>
      </Auth>
    </Provider>
  )
};    