"use client";
import Loading from "@app/loading";
import EventBox from "@components/EventBox";
import { useEffect, useState } from "react";
const EventsPage = () => {
	const [events, setEvents] = useState();
	const fetchEvents = async () => {
		const response = await fetch('/api/events');
		const data = await response.json();
		const sortedEvents = data
			.filter((event) => event.visible === true)
			.sort((a, b) => {
				if (a.start_date === null) {
					return -1; // null stays first
				} else if (b.start_date === null) {
					return 1; // null stays first
				} else {
					return new Date(b.start_date) - new Date(a.start_date); // Latest events in decreasing order
				}
			});
		setEvents(sortedEvents);
	}

	useEffect(() => {
		fetchEvents();
	}, [])
	if (!events) return <Loading />
	return (
		<main>
			<section className="flex justify-center flex-wrap">
				{events.length ?
					events.map((i) => { return (<EventBox key={i._id} object={i} />) })
					: <p className="text-3xl font-bold">No Events Found</p>}
			</section>
		</main>
	)
}
export default EventsPage;