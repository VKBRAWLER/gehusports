import React from 'react'

const Faculty = (params) => {
  return (
    <>
    <h1 className='w-full text-center font-extrabold text-5xl texts mt-48 relative z-10'>FACULTY INCHARHGE</h1>
      <section className="my-10 w-full flex justify-evenly items-center min-h-[600px] flex-wrap">
        <div className="boss relative order-n group overflow-hidden">
          <p className='text-white absolute -bottom-44 p-2 group-hover:bottom-14 duration-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a aliquid explicabo eaque? Vero dignissimos officia nulla laudantium id nesciunt laboriosam facere adipisci amet. Ducimus, deleniti. Ea provident perspiciatis earum.</p>
          <img src={params.dicimg} alt="" className="lg:w-full h-full max-w-full" />
          <h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Dr. M. C. Lohani</h4>
        </div>
        <div className="boss relative order-2">
          <img src={params.facimg} alt="" className="lg:w-full h-full max-w-full" />
          <h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Faculty 1</h4>
        </div>
        <div className="boss relative order-4">
          <img src={params.facimg} alt="" className="lg:w-full h-full max-w-full" />
          <h4 className='w-full text-center bottom-3 absolute text-3xl font-semibold bg-white'>Faculty 2</h4>
        </div>
      </section>
    </>
  )
}

export default Faculty