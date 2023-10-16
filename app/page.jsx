import LateralScroll from '@components/LateralScroll';
import React from 'react'
const HomePage = () => {
  const facimg = "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/04/Profile_Bio-Tech_0061_DSC_9244.jpg";
  const valo = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltee455c2e719bb8b9/6494cf1ef1585c219370578e/Valorant_Deadlock_Homepage_Desktop.mp4";
  return (
    <main>
    <div className='absolute top-0 w-full h-screen flex justify-center items-center overflow-hidden'><video className='z-0 max-w-none w-auto h-full' src={valo} autoPlay muted loop/></div>
      <h1 className='w-full text-center font-extrabold text-5xl texts relative z-10'>Graphic Era Hill University Presents...</h1>
      <h1 className='w-full text-center font-extrabold text-5xl texts relative z-10'>Endurance Club</h1>
      <section className="mb-20 relative w-full max-h-screen flex justify-evenly items-center h-[550px] overflow-hidden">
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group"><img className="box opacity-30 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://cdn.discordapp.com/attachments/1162745234011193385/1162750045867745372/45704660-illustration-of-volleyball-player-playing-on-abstract-background.jpg?ex=653d125d&is=652a9d5d&hm=ef35508d72b89b690fb3ea5c844df66f87062aaf3e169e8dcd71f83731ba163a&'/><h4 className='w-full text-center bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>Outdoor Sports</h4></div>
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group"><img className="box opacity-30 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://cdn.discordapp.com/attachments/1162745234011193385/1162750045867745372/45704660-illustration-of-volleyball-player-playing-on-abstract-background.jpg?ex=653d125d&is=652a9d5d&hm=ef35508d72b89b690fb3ea5c844df66f87062aaf3e169e8dcd71f83731ba163a&'/><h4 className='w-full text-center bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>Indoor Sports</h4></div>
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group"><img className="box opacity-30 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://cdn.discordapp.com/attachments/1162745234011193385/1162750045867745372/45704660-illustration-of-volleyball-player-playing-on-abstract-background.jpg?ex=653d125d&is=652a9d5d&hm=ef35508d72b89b690fb3ea5c844df66f87062aaf3e169e8dcd71f83731ba163a&'/><h4 className='w-full text-center bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>E-Sports</h4></div>
      </section>
      <h1 className='w-full text-center font-extrabold text-5xl texts'>FACULTY INCHARHGE</h1>
      <section className="my-10 w-full flex justify-evenly items-center min-h-[600px] flex-wrap">
        <div className="boss relative order-n"><img src={facimg} alt="" className="lg:w-full h-full max-w-full" /><h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Dr. M. C. Lohani</h4></div>
        <div className="boss relative order-2"><img src={facimg} alt="" className="lg:w-full h-full max-w-full" /><h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Faculty 1</h4></div>
        <div className="boss relative order-4"><img src={facimg} alt="" className="lg:w-full h-full max-w-full" /><h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Faculty 2</h4></div>
      </section>
      <LateralScroll/>
    </main>
  )
}

export default HomePage;