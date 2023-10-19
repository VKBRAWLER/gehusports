import LateralScroll from '@components/LateralScroll';
import React from 'react'
const HomePage = () => {
  const facimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwfjJEZno_M_rTutJHcl9BTTb8wIHfXZ2z3iNjmvZ&s";
  const drone = 'https://cdn.discordapp.com/attachments/1162451241872412902/1164445349147054131/drone.mp4?ex=65433d3d&is=6530c83d&hm=3b8cb22447eed598759621bddfc8097b8627a24d897623c3c2e172c1bc431301&';
  const dicimg = 'https://cdn.discordapp.com/attachments/1163848747504124019/1164445807332831272/mc.jpg?ex=65433daa&is=6530c8aa&hm=02f30612bb298b5cf75fa14c2553e13b99f94793547b009976b2f8016848098e&';
  return (
    <main>
      <div className='top-0 bottom-0 left-0 right-0 absolute z-0 flex justify-center items-center overflow-hidden'><video className='xl:w-full h-full xl:h-auto w-auto max-w-none' src={drone} autoPlay muted loop/></div>
      <h1 className='w-full text-center font-extrabold text-3xl lg:text-5xl texts relative z-10'>Graphic Era Hill University Presents...<br/>Endurance Cup</h1>
      {/* <h1 className='w-full text-center font-extrabold text-5xl texts relative z-10'>Endurance Cup</h1> */}
      <section className="my-10 relative w-full max-h-screen flex justify-evenly items-center h-96">
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
          <img className="box opacity-75 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://media.discordapp.net/attachments/1163848747504124019/1163850539352735845/outdoor1.png?ex=65411347&is=652e9e47&hm=8db7b56df9daea89239b94249c654771fbab04efad41a76d2e28939d17bd5231&=&width=553&height=662'/>
          <h4 className='w-full text-center texts bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>Outdoor Sports</h4>
        </div>
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
          <img className="box opacity-75 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://media.discordapp.net/attachments/1163848747504124019/1163849567972901024/indoor2.png?ex=65411260&is=652e9d60&hm=399940fd77ee48c7c92ee9c421babf011731c6532ce55fa77eca4a42de57af59&=&width=553&height=662 '/>
          <h4 className='w-full text-center texts bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>Indoor Sports</h4>
        </div>
        <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
          <img className="box opacity-75 border-blue-500 border-2 group-hover:scale-125 group-hover:opacity-100" src='https://cdn.discordapp.com/attachments/1163848747504124019/1163849159791620199/Esports.png?ex=654111fe&is=652e9cfe&hm=59565505de6013d0b16ced2a339ea984e1a7b20abe104afd6ca2ee7dfaee6b02&'/>
          <h4 className='w-full text-center texts bottom-10 absolute text-2xl text-white font-extrabold group-hover:text-black group-hover:bottom-40 duration-500 group-hover:text-3xl'>E-Sports</h4>
        </div>
      </section>
      <h1 className='w-full text-center font-extrabold text-5xl texts mt-48 relative z-10'>FACULTY INCHARHGE</h1>
      <section className="my-10 w-full flex justify-evenly items-center min-h-[600px] flex-wrap">
        <div className="boss relative order-n group overflow-hidden">
          <p className='text-white absolute -bottom-44 p-2 group-hover:bottom-14 duration-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a aliquid explicabo eaque? Vero dignissimos officia nulla laudantium id nesciunt laboriosam facere adipisci amet. Ducimus, deleniti. Ea provident perspiciatis earum.</p>
          <img src={dicimg} alt="" className="lg:w-full h-full max-w-full" />
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