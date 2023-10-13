import React from 'react'
import events from '@data/json/events.json'
const EventsPage = () => {
    return (
    <>
    <main className='w-full h-screen bg-black'>
        <section className='w-full bg-blue-400 p-20 flex flex-wrap gap-3'>
            {events.map((i) => {
                return(
                    <div key={i.Name} className='flex flex-col justify-center items-center p-5 w-80 h-72 rounded-2xl bg-blue-500'>
                <div className=' w-10/12 h-40'>
                <img className='w-full h-full' src={i.Cimage} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{i.Title} Tournament</h1>
                    <section className='w-3/4 float-left'>
                    <p className='text-sm'>Time Remaining: </p>
                    <p>20hr 30min 1sec</p>
                    </section>
                    <section className='w-1/4 float-right'>
                    <button className='bg-red-800 p-2 rounded-xl'>
                        Register
                    </button>
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