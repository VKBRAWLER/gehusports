import LateralScroll from '@components/LateralScroll';
import MainPageList from '@components/MainPageList';
import EndurenceCup from '@components/EndurenceCup';
import Faculty from '@components/Faculty';
import React from 'react'
import FullScreenVideo from '@components/FullScreenVideo';
import Link from 'next/link';
const HomePage = () => {
  const facimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwfjJEZno_M_rTutJHcl9BTTb8wIHfXZ2z3iNjmvZ&s";
  const dicimg = 'https://cdn.discordapp.com/attachments/1163848747504124019/1164445807332831272/mc.jpg?ex=65433daa&is=6530c8aa&hm=02f30612bb298b5cf75fa14c2553e13b99f94793547b009976b2f8016848098e&';
  return (
    <>
    {/* <FullScreenVideo link={drone} type={'screenbgvideo'} /> */}
    <EndurenceCup/>
    <main className='z-10 relative'>
      <div className="w-full py-10 mt-[calc(60vh-6rem)] bg-white">
        <MainPageList />
      </div>
      <div className="bg-gradient-to-b from-white h-64"></div>
      {/* <Faculty facimg={facimg} dicimg={dicimg} /> */}
      {/* <LateralScroll/> */}
      <div className="h-screen"></div>
    </main>
    </>
  )
}

export default HomePage;