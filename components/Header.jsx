import React from 'react';
import Link from 'next/link';
const Header = () => {
  const glogo="https://th.bing.com/th/id/R.a41d23250be5b1cfa015aab47ac8e5ae?rik=Wb6nyP4jZ1e65A&riu=http%3a%2f%2f2021.ictsci.in%2fimages%2fclients%2fgraphic-era.png&ehk=hFqvwBMhMQ6x9iG%2f0w1CWdIOVDRn6gtg0a%2bTb%2fRoJzA%3d&risl=&pid=ImgRaw&r=0";
  return (
    <header className='cusgrid h-24 relative z-10'>
      <img className='p-2' src={'/gs_logo.png'} alt="" />
      <nav>
        <ul className='flex justify-evenly items-center h-full text-3xl'>
            <Link className href='/'>Home</Link>
            <Link className href='/about'>About</Link>
            <Link className href='/contact'>Contact</Link>
        </ul>
      </nav>
      <img className='p-2' src={glogo} alt="" />
      
    </header>
  )
}

export default Header;