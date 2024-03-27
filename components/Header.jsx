import Link from 'next/link';
const Header = () => {
  return (
    <header className='cusgrid h-16 sm:h-24 relative z-10'>
      <img className='p-2' src={"https://i.imgur.com/I7YOYMu.png"} alt="" />
      <nav>
        <ul className='flex justify-evenly items-center h-full text-md sm:text-3xl'>
          <li><Link className='text-white bg-black rounded-md bg-opacity-75 p-1 sm:p-2 lg:hover:text-black lg:hover:bg-white lg:hover:bg-opacity-75' href='/'>Home</Link></li>
          <li><Link className='text-white bg-black rounded-md bg-opacity-75 p-1 sm:p-2 lg:hover:text-black lg:hover:bg-white lg:hover:bg-opacity-75' href='/events'>Event</Link></li>
          {/* <li><Link className='text-white bg-black rounded-md bg-opacity-75 p-1 sm:p-2 lg:hover:text-black lg:hover:bg-white lg:hover:bg-opacity-75' href='/rules'>Rules</Link></li> */}
        </ul>
      </nav>
      <img className='p-2' src={"https://i.imgur.com/GEhPBQa.png"} alt="" />

    </header>
  )
}

export default Header;