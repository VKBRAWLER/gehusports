import Content from "./Content";
const LateralScroll = () => {
  const divs = [];
  for (let i = 0; i < 14; i++) {
    divs.push(<div className={"rounded-t-3xl bg-white bg-opacity-50 border-4 w-44 mem"}>
    <img src={Content.facimg} alt="" className={'rounded-full w-44 h-44'} />
    <h4 className={'text-center font-bold text-lg mt-10'}>FULL NAME</h4>
    <p className={'text-center'}>CO-ORDINATOR</p>
    </div>);
  }
  return (
    <section className="my-20 px-10 flex justify-center h-80 gap-10 overflow-x-scroll flex-wrap flex-col">
      {divs}
    </section>
  );
};

export default LateralScroll;