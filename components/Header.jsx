import React from 'react';
import Link from 'next/link';
const Header = () => {
  const glogo="https://th.bing.com/th/id/R.a41d23250be5b1cfa015aab47ac8e5ae?rik=Wb6nyP4jZ1e65A&riu=http%3a%2f%2f2021.ictsci.in%2fimages%2fclients%2fgraphic-era.png&ehk=hFqvwBMhMQ6x9iG%2f0w1CWdIOVDRn6gtg0a%2bTb%2fRoJzA%3d&risl=&pid=ImgRaw&r=0";
  return (
    <header className='h-24 flex w-full justify-center items-center relative z-10'>
      <img className='p-2 h-[inherit] absolute left-0' src={glogo} alt="" />
      <nav>
        <ul className='flex gap-[20vw] text-xl'>
          <Link href={'/events'} className='texts'>Events</Link>
          <li className='texts'>About</li>
          <li className='texts'>Register</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;