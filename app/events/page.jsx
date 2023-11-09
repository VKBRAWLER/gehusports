"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const EventsPage = () => {
	const [events, setEvents] = useState([]);
	const fetchEvents = async () => {
		const response = await fetch('/api/events');
		const data = await response.json();
		setEvents(data);
	}
	useEffect(() => {
		fetchEvents();
	}, [])
	return (
		<main>
			<section className="flex justify-center flex-wrap">
				{events.length ?
					events.map((i) => {
						console.log(i._id);
						return (
							<Link href={`/events/${i._id}`} className="m-2 w-full max-w-md md:max-w-6xl md:h-64 lg:h-80 rounded-2xl border-4 p-2 md:flex bg-black relative" key={i._id}>
								<img className="w-full md:w-auto rounded-2xl" src={i.poster_image} alt="image not found" />
								<article className="w-full p-2 text-white">
									<h1 className="text-3xl font-bold">Umang Khel</h1>
									<p className="text-sm">Lorem ipsum dolor sit amet consectetsur adipisicing elit. Quisquam, voluptatibus.</p>
									<p>12/Oct/2023 - 30/Oct/2023</p>
									<p>No. of Players Registered: {i.event_code}</p>
								</article>
								<button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 rounded-xl border-2 p-2 lg:hover:text-lg">Browse Event</button>
							</Link>
						)
					}
					)
					: <p className="text-3xl font-bold">No Events Found</p>}
			</section>
		</main>
	)
}
export default EventsPage;