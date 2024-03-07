"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ArticleBox from "@components/ArticleBox";
import Loading from "@app/loading";

const EventsPageParams = () => {
	const { event_code } = useParams();
	const [loading, setLoading] = useState(true);
	const [eventexist, setEventexist] = useState(null);
	const [sportsList, setSportsList] = useState(null);

	const SearchEvent_code = async (event_code) => {
		const response = await fetch(`/api/events/${event_code}`);
		const data = await response.json();
		setLoading(false);
		setEventexist(data.data);
		if (data) fetchSportsList();
	}
	const fetchSportsList = async () => {
		const response = await fetch(`/api/sports/${event_code}`);
		const sportsData = await response.json();
		setSportsList(sportsData);
	}
	useEffect(() => {
		SearchEvent_code(event_code);
	}, [])
if (loading) return <Loading />
	return (
		<main>
			{eventexist ?
				<section className='w-full p-2 flex flex-wrap justify-center gap-4'>
				{eventexist.sports_count.length ?
						sportsList?.map((i) => {
							return (
								<div className='p-8 w-80 h-[33rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative' key={i._id}>
									<img className='w-64 h-[17rem]' src={i.poster_image} alt="Image not found" />
									<h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{i.title} Tournament</h1>
									<ArticleBox obj={i} />
								</div>
							)
						}) :
						<p className="text-3xl font-bold text-center">No Sports Associated with {eventexist.title}</p>
					}
				</section>
				: <p className="text-3xl font-bold text-center">Event Not Found</p>}
		</main>
	)
}

export default EventsPageParams;