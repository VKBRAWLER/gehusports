import Content from "./Content";
const Faculty = () => {
  const Quote = `“Sports is not just about winning medals. It is about building character, developing a healthy body and mind, and learning to work in teams. Sports is a way of life that teaches us to face challenges with courage and determination. It is a way of discovering our true potential and realizing our dreams.”`;
  return (
    <>
      <h1 className='w-full text-center font-extrabold text-3xl sm:text-5xl texts relative bg-gradient-to-b from-white py-10 md:py-20'>Fauculty Teachers </h1>
      <section className="flex justify-evenly flex-wrap mx-5 gap-5">
        <div className="boss group">
          <img className='w-full' src={Content.facimg} alt="" />
          <div className='lg:relative'>
            <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty</h3>
          </div>
        </div>
        <div className="boss group">
          <img className='w-full' src={Content.facimg} alt="" />
          <div className='lg:relative'>
            <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty</h3>
          </div>
        </div>
        <div className="boss group">
          <img className='w-full' src={Content.facimg} alt="" />
          <div className='lg:relative'>
            <h3 className='text-2xl bg-blue-400 w-full text-center'>Faculty</h3>
          </div>
        </div>
      </section>

    </>
  )
}

export default Faculty;