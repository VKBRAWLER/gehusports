"use client";
import { useSearchParams } from 'next/navigation';
import SportsList from '@components/SportsList';
import Link from 'next/link';
const EventsPage = ({params}) => {
    return (
    <>
    <main>
        {/* <p className='text-center text-xl'>"status": {params.status}, "filter": {useSearchParams().get('filter')}</p> */}
        <section className='w-full px-3 sm:px-10 relative'>
            <ul className='flex gap-3 sm:gap-6 float-left mb-3'>
                <Link id='direct' href={'/events/UPCOMING'} className='text-md sm:text-3xl font-bold text-white lg:hover:underline cursor-pointer border-b-8'>UPCOMING</Link>
                <Link href={'/events/ONGOING'} className='text-md sm:text-3xl font-bold text-white lg:hover:underline cursor-pointer border-b-8'>ONGOING</Link>
                <Link href={'/events/COMPLETED'} className='text-md sm:text-3xl font-bold text-white lg:hover:underline cursor-pointer border-b-8'>COMPLETED</Link>
            </ul>
            <details className='pl-3 float-right'>
                <summary className='text-lg sm:text-2xl select-none cursor-pointer'>Filter</summary>
            <ul className='text-center absolute right-4 top-14 rounded-3xl py-4 sm:py-10 px-2 border-4 bg-green-200 bg-opacity-75 flex flex-col sm:flex-row'>
                <Link href={{query: { filter: 'outdoor sports' }}} className='lg:hover:bg-green-600 cursor-pointer px-4 sm:px-10 py-2 font-bold text-md sm:text-xl rounded-xl'>Outdoor Sports</Link>
                <Link href={{query: { filter: 'indoor sports' }}} className='lg:hover:bg-green-600 cursor-pointer px-4 sm:px-10 py-2 font-bold text-md sm:text-xl rounded-xl'>Indoor Sports</Link>
                <Link href={{query: { filter: 'e-sports' }}} className='lg:hover:bg-green-600 cursor-pointer px-4 sm:px-10 py-2 font-bold text-md sm:text-xl rounded-xl'>E-Sports</Link>
            </ul>
            </details>
        </section>
        <SportsList status={params.status} filter={useSearchParams().get('filter')} />
    </main>
    </>
  )
}

export default EventsPage;