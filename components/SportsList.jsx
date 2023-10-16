import React from 'react';
import { Suspense } from 'react';
import Timer from './Timer';
const SportsList = (params) => {
  let SportsArray = params.events.filter((i)=> i[params.status]);
  if (params.filter) { SportsArray = SportsArray.filter((i)=> (params.filter[0] == 'e'))}
    return (
    <section className='w-full p-2 flex flex-wrap justify-center gap-3'>
        {SportsArray.map((i) => {
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
        })}
    </section>
  )
}

export default SportsList