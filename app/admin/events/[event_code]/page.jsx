"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ArticleBox from "@components/ArticleBox";
import { formatDate } from "@utils/Time";
import { MdDelete } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Provider from "@components/Provider";
import Auth from "@components/Auth";
import Verified from "@components/Verified";
import RoleAuth from "@components/RoleAuth";
import Loading from "@app/loading";
const AdminsEventsPageParams = () => {
	const { event_code } = useParams();
	const { data: session } = useSession();
	const [loading, setLoading] = useState(true);
	const [eventData, setEventData] = useState(false);
	const [sportsList, setSportsList] = useState(null);
	const [eventDetails, setEventDetails] = useState({ title: '', startDate: '', endDate: '' });
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
				body: JSON.stringify({ visible: !eventData.visible, updated_by: session?.user.user_code }),
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
	useEffect(() => {
		SearchEvent_code(event_code);
	}, [])
	if (loading) return <Loading />
	return (
		<main>
			{eventData ?
				<section className='w-full p-2 flex flex-wrap justify-center gap-4'>
					<div className="my-5 w-full max-w-[104rem] md:h-64 lg:h-80 rounded-2xl border-4 border-white p-2 md:flex glassmorphic relative">
						<img className="w-full md:w-auto rounded-2xl" src={eventData.poster_image} alt="image not found" />
        		<article className="w-full p-2 text-white">
          <h1 className="text-3xl md:text-xl lg:text-3xl font-bold">{eventData.title}</h1>
          <p>{formatDate(eventData.start_date)} - {formatDate(eventData.end_date)}</p>
          <p className="text-base lg:text-lg">Created by: {eventData.created_by}</p>
          <p className="text-base lg:text-lg">Created on: {formatDate(eventData.created_at)}</p>
          <p className="text-base lg:text-lg">Last Upadated on: {formatDate(eventData.last_updated_at)}</p> 
					<p className="text-base lg:text-lg">Visibility: {(eventData.visible?<>True</>:<>False</>)}</p> 
          <p className="text-base lg:text-lg">{eventData.sports_count} sports</p>
        </article>
						<MdDelete onClick={DeleteEvent} className="w-14 h-12 md:absolute top-16 right-2 bg-red-300 my-1 md:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2" />
						{eventData.visible ? <FaEye onClick={VisibleEvent} className="w-14 h-12 md:absolute top-2 right-2 bg-white my-1 md:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2"/> : <FaEyeSlash onClick={VisibleEvent} className="w-14 h-12 md:absolute top-2 right-2 bg-white my-1 md:m-0 rounded-lg border-2 p-1 cursor-pointer inline mx-2"/>}
						<button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 my-1 md:m-0 rounded-xl border-2 p-2">Edit Event</button>
						{/* <label htmlFor="title" className="text-xl font-bold">Title:</label>
						<input type="text" id="title" className="border-2 border-gray-300 p-2 rounded" value={eventDetails.title} onChange={(e) => setEventDetails({ ...eventDetails, title: e.target.value })}/>
						<label htmlFor="startDate" className="text-xl font-bold">Start Date:</label>
						<input type="date" id="startDate" className="border-2 border-gray-300 p-2 rounded" value={eventDetails.startDate} onChange={(e) => setEventDetails({ ...eventDetails, startDate: e.target.value })}/>
						<label htmlFor="endDate" className="text-xl font-bold">End Date:</label>
						<input type="date" id="endDate" className="border-2 border-gray-300 p-2 rounded" value={eventDetails.endDate} onChange={(e) => setEventDetails({ ...eventDetails, endDate: e.target.value })} /> */}
					</div>
					{eventData.sports_count?
					sportsList.map((i) => {
						return (
							<div className='p-8 w-80 h-[29.5rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative' key={i._id}>
								<img className='w-64 h-[17rem]' src={i.poster_image} alt="Image not found" />
								<h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{i.title} Tournament</h1>
								<ArticleBox obj={i} />
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