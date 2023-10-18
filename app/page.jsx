import LateralScroll from '@components/LateralScroll';
import React from 'react'
const HomePage = () => {
  const facimg = "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/04/Profile_Bio-Tech_0061_DSC_9244.jpg";
  const valo = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltee455c2e719bb8b9/6494cf1ef1585c219370578e/Valorant_Deadlock_Homepage_Desktop.mp4";
  const drone = '/video/drone.mp4';
  return (
    <main>
      <div className='top-0 bottom-0 left-0 right-0 absolute z-0 flex justify-center items-center'><video className='max-w-none w-full min-h-screen' src={drone} autoPlay muted loop/></div>
      <h1 className='w-full text-center font-extrabold text-5xl texts relative z-10'>Graphic Era Hill University Presents...<br/>Endurance Cup</h1>
      {/* <h1 className='w-full text-center font-extrabold text-5xl texts relative z-10'>Endurance Cup</h1> */}
      <section className="mb-10 relative w-full max-h-screen flex justify-evenly items-center h-80">
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
          <img className="box opacity-75 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://media.discordapp.net/attachments/1163848747504124019/1163850539352735845/outdoor1.png?ex=65411347&is=652e9e47&hm=8db7b56df9daea89239b94249c654771fbab04efad41a76d2e28939d17bd5231&=&width=553&height=662'/>
          <h4 className='w-full text-center bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>Outdoor Sports</h4>
        </div>
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
          <img className="box opacity-75 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://media.discordapp.net/attachments/1163848747504124019/1163849567972901024/indoor2.png?ex=65411260&is=652e9d60&hm=399940fd77ee48c7c92ee9c421babf011731c6532ce55fa77eca4a42de57af59&=&width=553&height=662 '/>
          <h4 className='w-full text-center bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>Indoor Sports</h4>
        </div>
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
          <img className="box opacity-75 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://cdn.discordapp.com/attachments/1163848747504124019/1163849159791620199/Esports.png?ex=654111fe&is=652e9cfe&hm=59565505de6013d0b16ced2a339ea984e1a7b20abe104afd6ca2ee7dfaee6b02&'/>
          <h4 className='w-full text-center bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>E-Sports</h4>
        </div>
      </section>
      <h1 className='w-full text-center font-extrabold text-5xl texts mt-48 relative z-10'>FACULTY INCHARHGE</h1>
      <section className="my-10 w-full flex justify-evenly items-center min-h-[600px] flex-wrap">
        <div className="boss relative order-n group overflow-hidden">
          <p className='absolute -bottom-44 p-2 group-hover:bottom-14 duration-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a aliquid explicabo eaque? Vero dignissimos officia nulla laudantium id nesciunt laboriosam facere adipisci amet. Ducimus, deleniti. Ea provident perspiciatis earum.</p>
          <img src={facimg} alt="" className="lg:w-full h-full max-w-full" />
          <h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Dr. M. C. Lohani</h4>
        </div>
        <div className="boss relative order-2">
          <img src={facimg} alt="" className="lg:w-full h-full max-w-full" />
          <h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Faculty 1</h4>
        </div>
        <div className="boss relative order-4">
          <img src={facimg} alt="" className="lg:w-full h-full max-w-full" />
          <h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Faculty 2</h4>
        </div>
      </section>
      <LateralScroll/>
    </main>
  )
}

export default HomePage;