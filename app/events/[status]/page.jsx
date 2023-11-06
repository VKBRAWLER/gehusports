"use client";
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import SportsList from '@components/SportsList';
import NotFound from '@app/not-found';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
const EventsPage = ({ params }) => {
	const [filter, setFilter] = useState(null);
	useEffect(() => {
		setFilter(document.getElementById('filterbtn'));
	}, [])
	if (!(params.status === 'UPCOMING' || params.status === 'ONGOING' || params.status === 'COMPLETED')) {
		return <NotFound />
	}
	const paramss = useSearchParams();
	const paramsss = useParams();
	const pathname = usePathname()
	console.log(paramss.get('filter'), paramsss	, pathname);
	return (
		<main>
			<section className='w-full px-3 sm:px-10'>
				<ul className='flex gap-3 sm:gap-6 mb-3'>
					<li><Link href={'/events/UPCOMING'} className='text-md sm:text-3xl font-bold text-white lg:hover:underline cursor-pointer border-b-8'>UPCOMING</Link></li>
					<li><Link href={'/events/ONGOING'} className='text-md sm:text-3xl font-bold text-white lg:hover:underline cursor-pointer border-b-8'>ONGOING</Link></li>
					<li><Link href={'/events/COMPLETED'} className='text-md sm:text-3xl font-bold text-white lg:hover:underline cursor-pointer border-b-8'>COMPLETED</Link></li>
				</ul>
			</section>
			<section className='w-full px-3 sm:px-10 relative'>
				<details className='pl-3 float-right'>
					<summary id='filterbtn' className='text-lg sm:text-2xl select-none cursor-pointer border-2 p-2 rounded-2xl bg-green-600'>Filter</summary>
					<ul className='text-center absolute right-4 top-14 rounded-3xl py-4 sm:py-10 px-2 border-4 bg-green-200 bg-opacity-75 flex flex-col sm:flex-row'>
						<Link onClick={() => { filter.click() }} href={{ query: { filter: 'outdoor sports' } }} className='lg:hover:bg-green-600 cursor-pointer px-4 sm:px-10 py-2 font-bold text-md sm:text-xl rounded-xl'>Outdoor Sports</Link>
						<Link onClick={() => { filter.click() }} href={{ query: { filter: 'indoor sports' } }} className='lg:hover:bg-green-600 cursor-pointer px-4 sm:px-10 py-2 font-bold text-md sm:text-xl rounded-xl'>Indoor Sports</Link>
						<Link onClick={() => { filter.click() }} href={{ query: { filter: 'e-sports' } }} className='lg:hover:bg-green-600 cursor-pointer px-4 sm:px-10 py-2 font-bold text-md sm:text-xl rounded-xl'>E-Sports</Link>
					</ul>
				</details>
				<Link href={{ query: { filter: null } }} className='text-lg sm:text-2xl select-none cursor-pointer border-2 p-2 rounded-2xl bg-green-300 font-bold float-right'>{useSearchParams().get('filter')}<RxCross2 className='inline m-0' /></Link>
			</section>
			<SportsList status={params.status} filter={useSearchParams().get('filter')} />
		</main>
	)
}

export default EventsPage;