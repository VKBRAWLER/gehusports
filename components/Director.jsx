const Director = () => {
  return (
    <section className="relative w-full flex justify-center items-center flex-wrap gap-20 md:gap-0 min-h-[24rem]">
      <div className="md:h-[28rem] w-10/12 bg-blue-50 mt-10 flex items-center flex-col md:grid grid-rows-[70px_1fr] grid-cols-[340px_1fr]">
        <h1 className='w-full text-center font-extrabold text-3xl sm:text-5xl texts relative bg-gradient-to-b from-white col-span-2'>Honorable Director Sir</h1>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwfjJEZno_M_rTutJHcl9BTTb8wIHfXZ2z3iNjmvZ&s"} alt="" className="h-full w-[400px] col-span-1" />
      <div className="md:flex items-center text-center font-bold text-3xl hidden">"Sports do not build character. They reveal it. Sports have the power to bring out the best in individuals, pushing them to their limits and."</div>
      </div>
    </section>
  )
}

export default Director;