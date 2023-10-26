import React from 'react'

const Faculty = () => {
  const facimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwfjJEZno_M_rTutJHcl9BTTb8wIHfXZ2z3iNjmvZ&s";
  const dicimg = 'https://cdn.discordapp.com/attachments/1163848747504124019/1164445807332831272/mc.jpg?ex=65433daa&is=6530c8aa&hm=02f30612bb298b5cf75fa14c2553e13b99f94793547b009976b2f8016848098e&';
  return (
  <>
  <h1 className='w-full text-center font-extrabold text-3xl sm:text-5xl texts relative bg-gradient-to-b from-white py-10 md:py-20'>FACULTY INCHARHGE</h1>
    <section className="flex justify-evenly flex-wrap mx-5 gap-5">
      <div className="max-w-sm sm:w-72 md:w-1/4 bg-white">
        <img className='w-full' src={facimg} alt="" />
        <div className=''>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3>
          <p className='m-2'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quibusdam et tempore, aut recusandae aspernatur asperiores. Possimus, accusamus, dicta cum molestias quisquam placeat provident, veritatis sapiente assumenda necessitatibus libero quae.``</p></div>
      </div>
      <div className="max-w-sm sm:w-72 md:w-1/4 bg-white">
        <img className='w-full' src={facimg} alt="" />
        <div className=''>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3>
          <p className='m-2'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quibusdam et tempore, aut recusandae aspernatur asperiores. Possimus, accusamus, dicta cum molestias quisquam placeat provident, veritatis sapiente assumenda necessitatibus libero quae.``</p></div>
      </div>
      <div className="max-w-sm sm:w-72 md:w-1/4 bg-white">
        <img className='w-full' src={facimg} alt="" />
        <div className=''>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3>
          <p className='m-2'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quibusdam et tempore, aut recusandae aspernatur asperiores. Possimus, accusamus, dicta cum molestias quisquam placeat provident, veritatis sapiente assumenda necessitatibus libero quae.``</p></div>
      </div>
    </section>
    
  </>
  )
}

export default Faculty