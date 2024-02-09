import { formatDate } from "@utils/Time";
import Link from "next/link";
const EventBox = (params) => {
  const obj = params.object;
  return (
    <Link href={`/events/${obj._id}`} className="m-2 w-full max-w-md md:max-w-6xl md:h-64 lg:h-80 rounded-2xl border-4 border-white p-2 md:flex glassmorphic relative" key={obj._id}>
      {/* +++ get an alt image for this */}
      <img className="w-full md:w-auto rounded-2xl" src={obj.poster_image} alt="image not found" />
      <article className="w-full p-2 text-white">
        <h1 className="text-3xl font-bold">Umang Khel</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetsur adipisicing elit. Quisquam, voluptatibus.</p>
        <p>{formatDate(obj.start_date)} - {formatDate(obj.end_date)}</p>
        <p>No. of Players Registered: {obj.event_code}</p>
      </article>
      <button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 rounded-xl border-2 p-2 lg:hover:text-lg">Browse Event</button>
    </Link>
  )
}

export default EventBox;