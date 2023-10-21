import React from 'react'

const MainPageList = () => {
return (
<>
<section className="relative w-full max-h-screen flex justify-evenly items-center h-96">
  <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
    <img className="box opacity-75 border-blue-500 border-2 lg:group-hover:scale-125 lg:group-hover:opacity-100" src='https://media.discordapp.net/attachments/1163848747504124019/1163850539352735845/outdoor1.png?ex=65411347&is=652e9e47&hm=8db7b56df9daea89239b94249c654771fbab04efad41a76d2e28939d17bd5231&=&width=553&height=662'/>
    <h4 className='w-full text-center texts bottom-10 absolute text-2xl text-white font-extrabold lg:group-hover:text-black lg:group-hover:bottom-40 lg:group-hover:scale-125 duration-500 lg:group-hover:text-3xl'>Outdoor Sports</h4>
  </div>
  <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
    <img className="box opacity-75 border-blue-500 border-2 lg:group-hover:scale-125 lg:group-hover:opacity-100" src='https://media.discordapp.net/attachments/1163848747504124019/1163849567972901024/indoor2.png?ex=65411260&is=652e9d60&hm=399940fd77ee48c7c92ee9c421babf011731c6532ce55fa77eca4a42de57af59&=&width=553&height=662 '/>
    <h4 className='w-full text-center texts bottom-10 absolute text-2xl text-white font-extrabold lg:group-hover:text-black lg:group-hover:bottom-40 lg:group-hover:scale-125 duration-500 lg:group-hover:text-3xl'>Indoor Sports</h4>
  </div>
  <div className="w-1/3 flex justify-center items-center h-full relative z-10 group">
    <img className="box opacity-75 border-blue-500 border-2 lg:group-hover:scale-125 lg:group-hover:opacity-100" src='https://cdn.discordapp.com/attachments/1163848747504124019/1163849159791620199/Esports.png?ex=654111fe&is=652e9cfe&hm=59565505de6013d0b16ced2a339ea984e1a7b20abe104afd6ca2ee7dfaee6b02&'/>
    <h4 className='w-full text-center texts bottom-10 absolute text-2xl text-white font-extrabold lg:group-hover:text-black lg:group-hover:bottom-40 lg:group-hover:scale-125 duration-500 lg:group-hover:text-3xl'>E-Sports</h4>
  </div>
  </section>
</>
)
}

export default MainPageList