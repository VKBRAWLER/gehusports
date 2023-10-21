import LateralScroll from '@components/LateralScroll';
import MainPageList from '@components/MainPageList';
import Faculty from '@components/Faculty';
import React from 'react'
import FullScreenVideo from '@components/FullScreenVideo';
const HomePage = () => {
  const facimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwfjJEZno_M_rTutJHcl9BTTb8wIHfXZ2z3iNjmvZ&s";
  const drone = 'https://cdn.discordapp.com/attachments/1162451241872412902/1164445349147054131/drone.mp4?ex=65433d3d&is=6530c83d&hm=3b8cb22447eed598759621bddfc8097b8627a24d897623c3c2e172c1bc431301&';
  const dicimg = 'https://cdn.discordapp.com/attachments/1163848747504124019/1164445807332831272/mc.jpg?ex=65433daa&is=6530c8aa&hm=02f30612bb298b5cf75fa14c2553e13b99f94793547b009976b2f8016848098e&';
  return (
    <>
    <FullScreenVideo link={drone} type={'screenbgvideo'} />
    <main>
      <MainPageList />
      <Faculty facimg={facimg} dicimg={dicimg} />
      <LateralScroll/>
    </main>
    </>
  )
}

export default HomePage;