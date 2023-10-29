import Content from "./Content";
const Faculty = () => {
  const facimg = Content.facimg;
  const dicimg = Content.dicimg;
  return (
  <>
  <h1 className='w-full text-center font-extrabold text-3xl sm:text-5xl texts relative bg-gradient-to-b from-white py-10 md:py-20'>FACULTY INCHARHGE</h1>
    <section className="flex justify-evenly flex-wrap mx-5 gap-5">
      <div className="max-w-sm sm:w-72 md:w-1/4 overflow-hidden bg-white group">
        <img className='w-full' src={facimg} alt="" />
        <div className='lg:relative'>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3>
          <p className='m-2 lg:absolute left-1 right-1 -bottom-full lg:opacity-0 group-hover:bottom-3/4 group-hover:opacity-100 duration-700'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quibusdam et tempore, aut recusandae aspernatur asperiores. Possimus, accusamus, dicta cum molestias quisquam placeat provident, veritatis sapiente assumenda necessitatibus libero quae.``</p></div>
      </div>
      <div className="max-w-sm sm:w-72 md:w-1/4 overflow-hidden bg-white group">
        <img className='w-full' src={facimg} alt="" />
        <div className='lg:relative'>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3>
          <p className='m-2 lg:absolute left-1 right-1 -bottom-full lg:opacity-0 group-hover:bottom-3/4 group-hover:opacity-100 duration-700'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quibusdam et tempore, aut recusandae aspernatur asperiores. Possimus, accusamus, dicta cum molestias quisquam placeat provident, veritatis sapiente assumenda necessitatibus libero quae.``</p></div>
      </div>
      <div className="max-w-sm sm:w-72 md:w-1/4 overflow-hidden bg-white group">
        <img className='w-full' src={facimg} alt="" />
        <div className='lg:relative'>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3>
          <p className='m-2 lg:absolute left-1 right-1 -bottom-full lg:opacity-0 group-hover:bottom-3/4 group-hover:opacity-100 duration-700'>``Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quibusdam et tempore, aut recusandae aspernatur asperiores. Possimus, accusamus, dicta cum molestias quisquam placeat provident, veritatis sapiente assumenda necessitatibus libero quae.``</p></div>
      </div>
    </section>
    
  </>
  )
}

export default Faculty