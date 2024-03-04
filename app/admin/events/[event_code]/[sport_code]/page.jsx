"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Provider from "@components/Provider";
import Auth from "@components/Auth";
import Verified from "@components/Verified";
import RoleAuth from "@components/RoleAuth";
import Loading from "@app/loading";
import { formatDate } from "@utils/Time";
import Link from "next/link";
const AdminsSportsPage = () => {
  const { event_code, sport_code } = useParams();
  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventStatus, setEventStatus] = useState();
  const SearchEvent_code = async () => {
    const response = await fetch(`/api/events/${event_code}`);
    const data = await response.json();
    setLoading(false);
    setEventStatus(data.data);
    if (data.data) fetchSport();
  }
  const fetchSport = async () => {
    const response = await fetch(`/api/events/${event_code}/${sport_code}`);
    const sportsData = await response.json();
    setSport(sportsData);
    console.log(sportsData);
  }
  useEffect(() => {
    SearchEvent_code();
  }, [])
  if (loading) return <Loading />
  if (!eventStatus) return <p className="text-3xl font-bold text-center">Events Not Found</p>;
  return (
    <main>
      { sport &&
      <div className='p-8 w-80 h-[33rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative' key={sport._id}>
        <img className='w-64 h-[17rem]' src={"https://media.discordapp.net/attachments/1162451241872412901/1213367132373516328/WhatsApp_Image_2023-10-31_at_22.56.45_5a95a456.jpg?ex=65f53733&is=65e2c233&hm=ef05d2ef0dfe449198cd695bab88e2ad4eef6c233ad8ff50f36c629f0b6a57df&=&format=webp&width=614&height=671"} alt="Image not found" />
        <h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{sport.title} Tournament</h1>
        <article className="h-[4.5rem]">
          <h2 className='text-xl font-bold mr-2'>Start Date: {formatDate(sport.start_date)}</h2>
          <h2 className='text-xl font-bold mr-2'>End Date: {formatDate(sport.end_date)}</h2>
          <h2 className="text-xl font-bold mr-2">Regestration: {sport.register ? "Open" : "Closed"}</h2>
          <Link href={`/admin/events/${event_code}/${sport._id}`} className="absolute bottom-2 right-2 bg-blue-400 p-2 rounded-xl">Edit Sport</Link>
        </article>
      </div>}
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