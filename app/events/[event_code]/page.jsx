"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ArticleBox from "@pages/ArticleBox";

const EventsPageParams = () => {
	const { event_code } = useParams();
	const [eventexist, setEventexist] = useState(false);
	const [sportsList, setSportsList] = useState(null);

	const Searchevent_code = async (event_code) => {
		const response = await fetch(`/api/events/${event_code}`);
		const data = await response.json();
		setEventexist(data.exist);
		if (data.exist) fetchSportsList();
	}
	const fetchSportsList = async () => {
		const response = await fetch(`/api/sports/${event_code}`);
		const data = await response.json();
		setSportsList(data);
	}
	useEffect(() => {
		Searchevent_code(event_code);
	}, [])
	return (
		<main>
			{eventexist ?
				<section className='w-full p-2 flex flex-wrap justify-center gap-4'>
					{sportsList && sportsList.map((i) => {
						return (
							<div className='p-8 w-80 h-[29.5rem] rounded-2xl bg-white bg-opacity-70 lg:hover:bg-opacity-100 border-4 border-black relative' key={i._id}>
								<img className='w-64 h-[17rem]' src={i.poster_image} alt="Image not found" />
								<h1 className='text-center font-bold text-3xl w-full h-[4.5rem] my-1'>{i.title} Tournament</h1>
								<ArticleBox obj={i} />
							</div>
						)
					})}
				</section>
				: <p className="text-3xl font-bold text-center">Events Not Found</p>}
		</main>
	)
}

export default EventsPageParams;