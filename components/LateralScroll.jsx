import coordinatorlist from "@data/json/coordinatorlist.json"
const LateralScroll = () => {
  return (
    <section className="my-20 px-10 flex justify-center h-[26rem] gap-10 overflow-x-scroll flex-wrap flex-col">
      {coordinatorlist.map((i)=> {
        return(
          <div className={"rounded-t-3xl bg-white bg-opacity-50 border-4 w-64 flex justify-center flex-col items-center mem"}>
          <img src={i.Image} alt="" className={'rounded-full w-56 h-56'} />
          <h4 className={'text-center font-bold text-2xl mt-10'}>{i.Name}</h4>
          <p className={'text-center font-bold text-lg mt-10'}>{i.Designation}</p>
          </div>
        )
      })}
    </section>
  );
};

export default LateralScroll;