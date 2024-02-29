import { formatDate } from "@utils/Time";
import Link from "next/link";
const EventBox = (params) => {
  const obj = params.object;
  if (params.userType === "admin") {
    return (
      <Link href={`/admin/events/${obj._id}`} className="m-2 w-full max-w-md md:max-w-6xl md:h-64 lg:h-80 rounded-2xl border-4 border-white p-2 md:flex glassmorphic relative">
        <img className="w-full md:w-auto rounded-2xl" src={obj.poster_image} alt="image not found" />
        <article className="w-full p-2 text-white">
          <h1 className="text-3xl md:text-xl lg:text-3xl font-bold">{obj.title}</h1>
          <p>{formatDate(obj.start_date)} - {formatDate(obj.end_date)}</p>
          <p className="text-base lg:text-lg">Created by: {obj.created_by}</p>
          <p className="text-base lg:text-lg">Created on: {formatDate(obj.created_at)}</p>
          <p className="text-base lg:text-lg">Last Updated by: {obj.last_updated_by || "N/A"}</p> 
          <p className="text-base lg:text-lg">Last Updated on: {formatDate(obj.last_updated_at )}</p> 
          <p className="text-base lg:text-lg">Visibility: {(obj.visible?<>True</>:<>False</>)}</p> 
          <p className="text-base lg:text-lg">{obj.sports_count} sports</p>
        </article>
        <button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 my-1 md:m-0 rounded-xl border-2 p-2">Edit Event</button>
      </Link>
    )
  }
  else {  
    return (
      <Link href={`/events/${obj._id}`} className="m-2 w-full max-w-md md:max-w-6xl md:h-64 lg:h-80 rounded-2xl border-4 border-white p-2 md:flex glassmorphic relative">
        <img className="w-full md:w-auto rounded-2xl" src={obj.poster_image} alt="image not found" />
        <article className="w-full p-2 text-white">
          <h1 className="text-3xl font-bold">{obj.title}</h1>
          <p>{formatDate(obj.start_date)} - {formatDate(obj.end_date)}</p>
          <p className="text-lg">{obj.sports_count} sports</p>
        </article>
        <button className="md:absolute w-full md:w-auto bottom-2 right-2 bg-slate-500 rounded-xl border-2 p-2 lg:hover:text-lg">Browse Event</button>
      </Link>
    )
  }
}

export default EventBox;