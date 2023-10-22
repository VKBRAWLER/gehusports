import React from 'react'

const Faculty = () => {
  const facimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwfjJEZno_M_rTutJHcl9BTTb8wIHfXZ2z3iNjmvZ&s";
  const dicimg = 'https://cdn.discordapp.com/attachments/1163848747504124019/1164445807332831272/mc.jpg?ex=65433daa&is=6530c8aa&hm=02f30612bb298b5cf75fa14c2553e13b99f94793547b009976b2f8016848098e&';
  return (
    <>
    <h1 className='w-full text-center font-extrabold text-5xl texts relative bg-gradient-to-b from-white pt-20'>FACULTY INCHARHGE</h1>
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
    </>
  )
}

export default Faculty