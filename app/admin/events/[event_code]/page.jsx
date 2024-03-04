"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { formatDate } from "@utils/Time";
import { MdDelete } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Provider from "@components/Provider";
import Auth from "@components/Auth";
import Verified from "@components/Verified";
import RoleAuth from "@components/RoleAuth";
import Loading from "@app/loading";
import Link from "next/link";
const AdminsEventsPageParams = () => {
	const { event_code } = useParams();
	const { data: session } = useSession();
	const [loading, setLoading] = useState(true);
	const [eventData, setEventData] = useState(false);
	const [sportsList, setSportsList] = useState(null);
  const [EditingMode, setEditingMode] = useState(false);
	const [eventDetails, setEventDetails] = useState({ title: '', start_date: '', end_date: '', poster_image: '', last_updated_by: session?.user.user_code });
	const updateEventDetails = (e) => {
    if (e) setEventDetails({ ...eventDetails, [e.target.id]: e.target.value });
		console.log(eventDetails);
  }
	const SearchEvent_code = async (event_code) => {
		const response = await fetch(`/api/events/${event_code}`);
		const data = await response.json();
		setLoading(false);
		setEventData(data.data);
		if (data) fetchSportsList();
	}
	const fetchSportsList = async () => {
		const response = await fetch(`/api/sports/${event_code}`);
		const sportsData = await response.json();
		setSportsList(sportsData);
	}
	const DeleteEvent = () => {
		const DeleteRequest = async () => {
				const response = await fetch(`/api/events`, {
				method: 'DELETE',
					body: JSON.stringify({ _id: event_code, deleted_by: session?.user.user_code }),
				});
				const data = await response.json();
				if (data.success) {
					alert('Event Deleted');
					window.location.href = '/admin/events';
				}
				else {
					alert(`Error: ${data.message}\nEvent Not Deleted`);
				}	
			}
		if (confirm('Are you sure you want to delete this event?')) { DeleteRequest(); }
	}
	const VisibleEvent = () => {
		const VisibleRequest = async () => {
			const response = await fetch(`/api/events/${event_code}`, {
				method: 'PUT',
				body: JSON.stringify({ visible: !eventData.visible, last_updated_by: session?.user.user_code }),
			});
			const data = await response.json();
			if (data.success) {
				alert('Event Visibility Updated');
				window.location.reload();
			}
			else {
				alert(`Error: ${data.message}\nEvent Visibility Not Updated`);
			}
		}
		if (confirm(`Are you sure you want to make this event ${eventData.visible?"Not Visible":"Visible"}?`)) { VisibleRequest(); }
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
		console.log(newReqBody);
		if (Object.keys(newReqBody).length <= 1) {
			alert(`No changes made`);
			return;
		}
		const response = await fetch(`/api/events/${event_code}`, {
			method: 'PUT',
			body: JSON.stringify(eventDetails),
		});
		const data = await response.json();
		if (data.success) {
			window.location.reload();
		}
		else {
			alert(`Error: ${data.message}`);
		}
	}
	useEffect(() => {
		SearchEvent_code(event_code);
	}, [])
	if (loading) return <Loading />
	return (
		<main>
			{eventData ?
				<section className='w-full p-2 flex flex-wrap justify-center gap-4'>
					{EditingMode?
					<form action={saveChanges} className="my-5 w-full max-w-[104rem] lg:h-96 rounded-2xl border-4 border-white p-2 lg:flex glassmorphic relative">
						<img className="w-full lg:w-auto rounded-2xl" src={eventDetails.poster_image === ''? eventData.poster_image: eventDetails.poster_image} alt="image not found" />
						<article className="w-full p-2 flex flex-col gap-1 lg:gap-5">
							<div>
								<label htmlFor="start_date" className="text-xl font-bold mx-5">Start Date:</label>
								<input type="date" id="start_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateEventDetails(e)} }/>
							</div>
							<div>
								<label htmlFor="end_date" className="text-xl font-bold mx-5">End Date:</label>
								<input type="date" id="end_date" className="border-2 border-gray-300 p-2 rounded" onChange={(e) => { updateEventDetails(e)} }/>
							</div>
							<div>
								<label htmlFor="title" className="text-xl font-bold mx-5">Title:</label>
								<input type="text" id="title" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateEventDetails(e)} }/>
							</div>
							<div>
								<label htmlFor="poster_image" className="text-xl font-bold mx-5">Image URL:</label>
								<input type="text" id="poster_image" className="border-2 border-gray-300 p-2 rounded w-full max-w-xl " onChange={(e) => { updateEventDetails(e)} }/>
							</div>
							<MdDelete onClick={DeleteEvent} className="w-14 h-12 lg:absolute top-16 right-2 bg-red-300 my-1 lg:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2" />
							{eventData.visible ? <FaEye onClick={VisibleEvent} className="w-14 h-12 lg:absolute top-2 right-2 bg-white my-1 lg:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2"/> : <FaEyeSlash onClick={VisibleEvent} className="w-14 h-12 lg:absolute top-2 right-2 bg-white my-1 lg:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2"/>}
							<p className='text-red-600 bg-yellow-50 rounded-2xl pl-2'>Keep the input blank if do not wish to change</p>
							<button type="submit" className="lg:absolute w-full lg:w-auto bottom-2 right-2 bg-slate-500 my-1 lg:m-0 rounded-xl border-2 p-2">Save Changes</button>
					</article>
					</form>:
					<div className="my-5 w-full max-w-[104rem] md:h-64 lg:h-80 rounded-2xl border-4 border-white p-2 md:flex glassmorphic relative">
					<img className="w-full md:w-auto rounded-2xl" src={eventData.poster_image} alt="image not found" />
        	<article className="w-full p-2 text-white">
          <h1 className="text-3xl md:text-xl lg:text-3xl font-bold">{eventData.title}</h1>
          <p>{formatDate(eventData.start_date)} - {formatDate(eventData.end_date)}</p>
          <p className="text-base lg:text-lg">Created by: {eventData.created_by}</p>
          <p className="text-base lg:text-lg">Created on: {formatDate(eventData.created_at)}</p>
          <p className="text-base lg:text-lg">Last Upadated by: {eventData.last_updated_by}</p> 
          <p className="text-base lg:text-lg">Last Upadated on: {formatDate(eventData.last_updated_at)}</p> 
					<p className="text-base lg:text-lg">Visibility: {(eventData.visible?<>True</>:<>False</>)}</p> 
          <p className="text-base lg:text-lg">{eventData.sports_count} sports</p>
        	</article>
						<button onClick={() => { setEditingMode(true); }} className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 my-1 md:m-0 rounded-xl border-2 p-2">Edit Event</button>
					</div>
					}
					{eventData.sports_count?
					sportsList?.map((i) => {
						return (
							<div className='p-8 w-80 h-[33rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative' key={i._id}>
								<img className='w-64 h-[17rem]' src={"https://media.discordapp.net/attachments/1162451241872412901/1213367132373516328/WhatsApp_Image_2023-10-31_at_22.56.45_5a95a456.jpg?ex=65f53733&is=65e2c233&hm=ef05d2ef0dfe449198cd695bab88e2ad4eef6c233ad8ff50f36c629f0b6a57df&=&format=webp&width=614&height=671"} alt="Image not found" />
								<h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{i.title} Tournament</h1>
								<article className="h-[4.5rem]">
									<h2 className='text-xl font-bold mr-2'>Start Date: {formatDate(i.start_date)}</h2>
									<h2 className='text-xl font-bold mr-2'>End Date: {formatDate(i.end_date)}</h2>
									<h2 className="text-xl font-bold mr-2">Regestration: {i.register ? "Open": "Closed"}</h2>
									<Link href={`/admin/events/${event_code}/${i._id}`} className="absolute bottom-2 right-2 bg-blue-400 p-2 rounded-xl">Edit Sport</Link>
								</article>
							</div>
						)
					}):
					<p className="text-3xl font-bold text-center">No Sports Associated with {eventData.title}</p>
				}
				</section>
				: <p className="text-3xl font-bold text-center">Events Not Found</p>}
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
            <AdminsEventsPageParams />
          </RoleAuth>
        </Verified>
      </Auth>
    </Provider>
  )
};