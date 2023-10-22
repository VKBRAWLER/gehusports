import React from 'react';
import Link from 'next/link';
const Header = () => {
  const gehulogo="https://th.bing.com/th/id/R.a41d23250be5b1cfa015aab47ac8e5ae?rik=Wb6nyP4jZ1e65A&riu=http%3a%2f%2f2021.ictsci.in%2fimages%2fclients%2fgraphic-era.png&ehk=hFqvwBMhMQ6x9iG%2f0w1CWdIOVDRn6gtg0a%2bTb%2fRoJzA%3d&risl=&pid=ImgRaw&r=0";
  const sportslogo = "https://cdn.discordapp.com/attachments/1163848747504124019/1164448619907272815/gs_logo.png?ex=65434049&is=6530cb49&hm=784094c8febc84b8cc2e02dc7afd4212ed4f13255757478095e4049c11b4b136&";
  return (
    <header className='cusgrid h-16 sm:h-24 relative z-10'>
      <img className='p-2' src={sportslogo} alt="" />
      <nav>
        <ul className='flex justify-evenly items-center h-full text-md sm:text-3xl'>
            <li><Link className='text-white bg-black rounded-md bg-opacity-75 p-1 sm:p-2 lg:hover:text-black lg:hover:bg-white lg:hover:bg-opacity-75' href='/'>Home</Link></li>
            <li><Link className='text-white bg-black rounded-md bg-opacity-75 p-1 sm:p-2 lg:hover:text-black lg:hover:bg-white lg:hover:bg-opacity-75' href='/events'>Event</Link></li>
            <li><Link className='text-white bg-black rounded-md bg-opacity-75 p-1 sm:p-2 lg:hover:text-black lg:hover:bg-white lg:hover:bg-opacity-75' href='/register'>About</Link></li>
        </ul>
      </nav>
      <img className='p-2' src={gehulogo} alt="" />
      
    </header>
  )
}

export default Header;