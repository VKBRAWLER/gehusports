import React from 'react'

const Home = () => {
  return (
    <main>
      <h1 className='w-full text-center font-extrabold text-3xl'>GRAPHIC ERA HILL UNIVERSITY - SPORTS WEBSITE</h1>
      <section className="bg-black w-full max-h-screen flex justify-evenly items-center h-[600px]">
        <div className="box relative"><h4 className='w-full text-center bottom-3 absolute text-2xl'>Outdoor Sports</h4></div>
        <div className="box relative"><h4 className='w-full text-center bottom-3 absolute text-2xl'>Indoor Sports</h4></div>
        <div className="box relative"><h4 className='w-full text-center bottom-3 absolute text-2xl'>E-Sports</h4></div>
      </section>
      
      <h1 className='w-full text-center font-extrabold text-3xl'>FACULTY INCHARHGE</h1>
      <section className="bg-gray-500 w-full max-h-screen flex justify-evenly items-center h-[600px] flex-wrap">
        <div className="boss relative order-n"><h4 className='w-full text-center bottom-3 absolute text-2xl'>Dr. M. C. Lohani</h4></div>
        <div className="boss relative order-2"><h4 className='w-full text-center bottom-3 absolute text-2xl'>Faculty 1</h4></div>
        <div className="boss relative order-4"><h4 className='w-full text-center bottom-3 absolute text-2xl'>Faculty 2</h4></div>
      </section>
      <section className="bg-gray-300 w-full max-h-screen flex justify-center items-center h-[350px] gap-20 overflow-x-scroll">
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
        <div className="circle"><div className="w-52 h-52 bg-black rounded-full"></div> <h4 className='w-full text-center font-bold text-lg'>Varun Kharkwal</h4><p className='w-full text-center'>Web-Developer</p></div>
      </section>
    </main>
  )
}

export default Home;