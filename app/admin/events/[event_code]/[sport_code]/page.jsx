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
  const [sportDetails, setSportDetails] = useState({ title: '', start_date: '', end_date: '', poster_image: '', last_updated_by: session?.user.user_code, event_code: event_code, _id: sport_code });
  const updateSportDetails = (e) => {
    setSportDetails({ ...sportDetails, [e.target.id]: e.target.value });
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
  }
  const EnableRegister = () => {
    const EnableRequest = async () => {
      const response = await fetch(`/api/sports`, {
        method: 'PUT',
        body: JSON.stringify({ register: !sport.register, last_updated_by: session?.user.user_code, _id: sport_code }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Registration Status Changed');
        window.location.reload();
      }
      else {
        alert(`Error: ${data.message}\nRegistration Status Not Changed`);
      }
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
  const saveChanges = async () => {
    let newReqBody = {};
    for (let key in sportDetails) {
      if (!sportDetails[key]) continue;
      if (typeof sportDetails[key] === 'string') {
        sportDetails[key] = sportDetails[key].trim();
        if (sportDetails[key] === '') continue;
      }
      newReqBody[key] = sportDetails[key];
    }
    if (Object.keys(newReqBody).length <= 3) {
      alert(`No changes made`);
      return;
    }
    const response = await fetch(`/api/sports`, {
      method: 'PUT',
      body: JSON.stringify(newReqBody),
    });
    const data = await response.json();
    if (data.success) {
      alert('Changes Saved');
      window.location.reload();
    }
    else {
      alert(`Error: ${data.message}\nChanges Not Saved`);
    }
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
        <img className='w-64 h-[17rem]' src={sportDetails.poster_image ===''? sport.poster_image: sportDetails.poster_image} alt="Image not found" />
        <h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{sport.title} Tournament</h1>
        <article className="h-[4.5rem]">
          <h2 className='text-xl font-bold mr-2'>Start Date: {formatDate(sport.start_date)}</h2>
          <h2 className='text-xl font-bold mr-2'>End Date: {formatDate(sport.end_date)}</h2>
          <h2 className="text-xl font-bold mr-2">Regestration: {sport.register ? "Open" : "Closed"}</h2>
        </article>
      </section>
      <form action={saveChanges} className='h-[38rem] p-8 flex-grow md:h-[31rem] max-w-[60rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative flex flex-col gap-6'>
        <div>
          <label htmlFor="start_date" className="text-xl font-bold mx-5">Start Date:</label>
          <input type="date" id="start_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="end_date" className="text-xl font-bold mx-5">End Date:</label>
          <input type="date" id="end_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="title" className="text-xl font-bold mx-5">Title:</label>
          <input type="text" id="title" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="poster_image" className="text-xl font-bold mx-5">Image URL:</label>
          <input type="text" id="poster_image" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <div>
          <label htmlFor="register_link" className="text-xl font-bold mx-5">Register Link:</label>
          <input type="text" id="register_link" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateSportDetails(e) }} />
        </div>
        <button type="button" onClick={EnableRegister} className="md:absolute w-full md:w-auto bottom-2 left-2 bg-green-500 my-1 md:m-0 rounded-xl border-2 p-2">{sport.register ? "Close" : "Open"} registration</button>
        <MdDelete onClick={DeleteEvent} className="w-14 h-12 absolute top-2 right-2 bg-red-300  lg:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2" />
        <button type="submit" className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 md:m-0 rounded-xl border-2 p-2">Save Changes</button>
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