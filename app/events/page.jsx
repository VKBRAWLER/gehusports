"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { RxCross2 } from 'react-icons/rx';
import Image from "next/image";
const EventsPage = () => {
	const imggg = `https://media.discordapp.net/attachments/1162451241872412901/1170010515276308610/BAANNNNN.jpg?ex=65577c34&is=65450734&hm=078ade8ea3629939be657cc5da6d04607a2b2960f8e6495c3ea7f3a9d2ce8b34&=&width=1177&height=662`;
	return (
		<main>
			<section className="flex justify-center flex-nowrap">
					<Link href={'/events/UPCOMING'}
					className="m-2 w-full max-w-md md:max-w-6xl md:h-64 lg:h-80 rounded-2xl border-4 p-2 md:flex bg-black relative"
					>
						<img className="w-full md:w-auto rounded-2xl"
						 src={imggg} alt="" />
						<article className="w-full p-2 text-white">
							<h1 className="text-3xl font-bold">Umang Khel</h1>
							<p className="text-sm">Lorem ipsum dolor sit amet consectetsur adipisicing elit. Quisquam, voluptatibus.</p>
							<p>12/Oct/2023 - 30/Oct/2023</p>
							<p>No. of Players Registered: 100</p>
						</article>
						<button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 rounded-xl border-2 p-2 lg:hover:text-lg">Browse Event</button>
					</Link>
			</section>
		</main>
	)
}

export default EventsPage;