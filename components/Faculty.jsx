import Content from "./Content";
const Faculty = () => {
  const facimg = Content.facimg;
  const dicimg = Content.dicimg;
  return (
  <>
  <h1 className='w-full text-center font-extrabold text-3xl sm:text-5xl texts relative bg-gradient-to-b from-white py-10 md:py-20'>Honorable Director Sir</h1>
    <section className="flex justify-evenly flex-wrap mx-5 gap-5">
      {/* <div className="max-w-sm sm:w-72 md:w-1/4 overflow-hidden bg-white group"><img className='w-full' src={facimg} alt="" /><div className='lg:relative'><h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3><p className='m-2 lg:absolute left-1 right-1 -bottom-full lg:opacity-0 group-hover:bottom-3/4 group-hover:opacity-100 duration-700'>``Quote HERE.``</p></div></div> */}
      <div className="boss group">
        <img className='w-full' src={dicimg} alt="" />
        <div className='lg:relative'>
          <h3 className='text-2xl bg-blue-400 w-full text-center'>Dr. M. C. Lohani</h3>
          <p className='m-2 lg:absolute left-1 right-1 -bottom-full lg:opacity-0 group-hover:bottom-3/4 group-hover:opacity-100 duration-700 lg:text-white ntexts'>
          “Sports is not just about winning medals. It is about building character, developing a healthy body and mind, and learning to work in teams. Sports is a way of life that teaches us to face challenges with courage and determination. It is a way of discovering our true potential and realizing our dreams.” 
            </p></div>
      </div>
      {/* <div className="max-w-sm sm:w-72 md:w-1/4 overflow-hidden bg-white group"><img className='w-full' src={facimg} alt="" /><div className='lg:relative'><h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty Name 01</h3><p className='m-2 lg:absolute left-1 right-1 -bottom-full lg:opacity-0 group-hover:bottom-3/4 group-hover:opacity-100 duration-700'>``Quote HERE..``</p></div></div> */}
    </section>
    
  </>
  )
}

export default Faculty