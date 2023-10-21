import React from 'react'
import Link from 'next/link';
const EnduranceCup = () => {
  const drone = 'https://cdn.discordapp.com/attachments/1162451241872412902/1164445349147054131/drone.mp4?ex=65433d3d&is=6530c83d&hm=3b8cb22447eed598759621bddfc8097b8627a24d897623c3c2e172c1bc431301&';
return (
<div className='absolute z-0 top-0 right-0 left-0 h-[60vh] flex flex-wrap justify-center'>
  <video className='object-cover w-full h-full' src={drone} autoPlay muted loop />
  {/* <span className='w-full h-5 bg-white absolute bottom-0'></span> */}
  <span className='tri-left'></span>
  <span className='tri-right'></span>
  <h1 className='w-full text-center font-extrabold text-3xl md:text-5xl btexts absolute top-1/4 italic text-white'>Graphic Era Hill University Presents...</h1>
  <h1 className='w-full text-center font-extrabold text-5xl md:text-7xl btexts absolute top-[calc(25%+80px)] italic text-white'>Endurance Cup</h1>
  <div className="w-full absolute bottom-12 sm:bottom-4 flex justify-center"><Link className='font-extrabold text-xl sm:text-3xl md:text-5xl rounded-xl p-2 italic wtexts bg-white lg:bg-transparent lg:hover:bg-white' href={'/events'}>Browse Events ....</Link></div>
</div>
)
}

export default EnduranceCup