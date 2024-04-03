import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className="min-h-32 h-fit py-10 px-2 glassmorphic relative font-classic text-sm sm-450:text-xl">
        <div className="grid md:grid-cols-3-auto w-full">
            <div>
                <h2 className="text-lg sm-450:text-2xl font-bold">Redirect Links</h2>
                <ul className="mx-5">
                    <li className='cursor-pointer'><Link href={`/`}>HomePage</Link></li>
                    <li className='cursor-pointer'><Link href={`/events`}>EventPage</Link></li>
                    <li className='cursor-pointer'><Link href={`/admin`}>AdminPage</Link></li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm-450:text-2xl font-bold text-right md:text-left">Contact Organizers</h2>
                <ul className="mx-5 text-right md:text-left">
                    <li>+91 9456790295</li>
                    <li>+91 9456790295</li>
                    <li>varunkh12345@gmail.com</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg sm-450:text-2xl font-bold">Developer's Contact</h2>
                <ul className="mx-5 ">
                    <li>https://github.com/VKbrawler</li>
                    <li>+91 9456790295</li>
                    <li>varunkh12345@gmail.com</li>
                </ul>
            </div>
        </div>
        <h6 className="text-center italic absolute bottom-1 right-4 text-sm">@Copywrite-GehuSports 2024</h6>
    </footer>
  )
}

export default Footer;