import Link from 'next/link'
const MainPageList = () => {
return (
<>
<section className="relative w-full flex justify-evenly items-center flex-wrap gap-20 md:gap-0 min-h-[24rem]">
  <Link href={'/events'} className="md:w-1/3 flex justify-center items-center h-full relative z-10 group">
    <img className="duration-500 w-64 lg:opacity-75 border-2 lg:group-hover:scale-125 lg:group-hover:opacity-100 shadow-3xl lg:group-hover:shadow-4xl" src='https://media.discordapp.net/attachments/1163848747504124019/1163850539352735845/outdoor1.png?ex=65411347&is=652e9e47&hm=8db7b56df9daea89239b94249c654771fbab04efad41a76d2e28939d17bd5231&=&width=553&height=662'/>
    <h4 className='w-full text-center texts bottom-10 absolute text-2xl lg:text-white font-extrabold lg:group-hover:text-black lg:group-hover:bottom-40 lg:group-hover:scale-125 duration-500 lg:group-hover:text-3xl'>Outdoor Sports</h4>
  </Link>
  <Link href={'/events'} className="md:w-1/3 flex justify-center items-center h-full relative z-10 group">
    <img className="duration-500 w-64 lg:opacity-75 border-2 lg:group-hover:scale-125 lg:group-hover:opacity-100 shadow-3xl lg:group-hover:shadow-4xl" src='https://media.discordapp.net/attachments/1163848747504124019/1163849567972901024/indoor2.png?ex=65411260&is=652e9d60&hm=399940fd77ee48c7c92ee9c421babf011731c6532ce55fa77eca4a42de57af59&=&width=553&height=662 '/>
    <h4 className='w-full text-center texts bottom-10 absolute text-2xl lg:text-white font-extrabold lg:group-hover:text-black lg:group-hover:bottom-40 lg:group-hover:scale-125 duration-500 lg:group-hover:text-3xl'>Indoor Sports</h4>
  </Link>
  <Link href={'/events'} className="md:w-1/3 flex justify-center items-center h-full relative z-10 group">
    <img className="duration-500 w-64 lg:opacity-75 border-2 lg:group-hover:scale-125 lg:group-hover:opacity-100 shadow-3xl lg:group-hover:shadow-4xl" src='https://cdn.discordapp.com/attachments/1163848747504124019/1163849159791620199/Esports.png?ex=654111fe&is=652e9cfe&hm=59565505de6013d0b16ced2a339ea984e1a7b20abe104afd6ca2ee7dfaee6b02&'/>
    <h4 className='w-full text-center texts bottom-10 absolute text-2xl lg:text-white font-extrabold lg:group-hover:text-black lg:group-hover:bottom-40 lg:group-hover:scale-125 duration-500 lg:group-hover:text-3xl'>E-Sports</h4>
  </Link>
  </section>
</>
)
}

export default MainPageList