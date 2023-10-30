import Timer from './Timer';
import events from '@data/json/events.json';
import Link from 'next/link';
const SportsList = (params) => {
  let SportsArray = events.filter((i)=> i[params.status]);
  if (params.filter) { SportsArray = SportsArray.filter((i)=> (params.filter[0] == i.TAG))}
  if (SportsArray.length) {
    return (
    <section className='w-full p-2 flex flex-wrap justify-center gap-3'>
        {SportsArray.map((i) => {
            return(
                <div key={i.Name} className='flex flex-col justify-center items-center p-5 w-80 rounded-2xl bg-white bg-opacity-70 hover:bg-opacity-100 border-2 border-black'>
                    <div className=' w-10/12'>
                        <img className='w-full h-full' src={i.Cimage} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold'>{i.Title} Tournament</h1>
                    <article className='w-5/6 h-11 flex justify-between items-center'>
                    {i.Sdate?
                        <>
                        <div>
                            <p className='text-sm'>Time Remaining: </p>
                            <Timer targetTime={i.Sdate} />
                        </div>
                        <Link href={'/'} className='bg-blue-400 p-2 rounded-xl'>Register</Link>
                        </>
                    : <div className='font-bold text-lg'>Comming Soon ...</div>
                    }
                    </article>
                </div>
            )
        })}
    </section>
  )
}
    else {
        return (
            <section className='w-full p-2 flex flex-wrap justify-center gap-3'>
                {params.filter && <p className='text-2xl font-bold'>No {params.filter} events found in {params.status} events</p>
                || <p className='text-2xl font-bold'>No {params.status} events found</p>
                }
            </section>
        )
    }
}

export default SportsList;