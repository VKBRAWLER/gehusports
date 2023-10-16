"use client";
import React, { Suspense, useState } from 'react'
import events from '@data/json/events.json'
import Timer from '@components/Timer'
import { useSearchParams } from 'next/navigation';
const EventsPage = () => {
    const [searchParams, setSearchParams] = useState(useSearchParams())
    const [status, setStatus] = useState(searchParams.get('status'));
    const [filter, setFilter] = useState(searchParams.get('filter'));
    const UpdateParams = () => {
        // setSearchParams(new URLSearchParams({ status: status, filter: filter }))
    }
    console.log({"status": status, "filter": filter})
    return (
    <>
    <main>
        <section className='w-full px-10 relative'>
            <ul className='flex gap-6 float-left mb-3'>
                <li className='text-3xl font-bold text-white hover:underline cursor-pointer border-b-8'>UPCOMING</li>
                <li className='text-3xl font-bold text-white hover:underline cursor-pointer border-b-8'>ONGOING</li>
                <li className='text-3xl font-bold text-white hover:underline cursor-pointer border-b-8'>COMPLETED</li>
            </ul>
            <details className='pl-3 float-right'>
                <summary className='text-2xl select-none cursor-pointer'>Filter</summary>
            <ul className='text-center absolute right-4 top-14 rounded-3xl py-10 px-2 border-4 bg-green-200 bg-opacity-75'>
                <li className='hover:bg-green-600 cursor-pointer px-10 py-2 font-bold text-xl rounded-xl'>Outdoor Sports</li>
                <li className='hover:bg-green-600 cursor-pointer px-10 py-2 font-bold text-xl rounded-xl'>Indoor Sports</li>
                <li className='hover:bg-green-600 cursor-pointer px-10 py-2 font-bold text-xl rounded-xl'>E-Sports</li>
            </ul>
            </details>
        </section>
        <section className='w-full p-2 flex flex-wrap justify-center gap-3'>
            {events.filter((i)=> i.UPCOMING).map((i) => {
                return(
                    <div key={i.Name} className='flex flex-col justify-center items-center p-5 w-80 h-72 rounded-2xl bg-white bg-opacity-70 hover:bg-opacity-100 border-2 border-black'>
                <div className=' w-10/12 h-40'>
                <Suspense fallback={<p>Loading...</p>}>
                    <img className='w-full h-full' src={i.Cimage} alt="" />
                </Suspense>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{i.Title} Tournament</h1>
                    <section className='w-3/4 float-left'>
                        <p className='text-sm'>Time Remaining: </p>
                        {/* <Timer targetTime={i.Sdate} /> */}
                    </section>
                    <section className='w-1/4 float-right'>
                        <button className='bg-blue-400 p-2 rounded-xl'>Register</button>
                    </section>
                </div>
            </div>
                )
            })
            }
        
        </section>
    </main>
    </>
  )
}

export default EventsPage;