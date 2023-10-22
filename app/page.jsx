import LateralScroll from '@components/LateralScroll';
import SportsTypeBox from '@components/SportsTypeBox';
import EndurenceCup from '@components/EndurenceCup';
import Faculty from '@components/Faculty';
import React from 'react'
import FullScreenVideo from '@components/FullScreenVideo';
import Link from 'next/link';
const HomePage = () => {
  return (
    <>
    {/* <FullScreenVideo link={drone} type={'screenbgvideo'} /> */}
    <EndurenceCup />
    <main className='z-10 relative'>
      <div className="w-full py-10 mt-[calc(60vh-6rem)] bg-white overflow-hidden">
        <SportsTypeBox />
      </div>
      <Faculty />
      {/* <div className="bg-gradient-to-b from-white h-64"></div> */}
      {/* <LateralScroll/> */}
      <div className="h-screen"></div>
    </main>
    </>
  )
}

export default HomePage;