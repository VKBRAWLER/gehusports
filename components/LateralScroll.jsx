import Content from "./Content";
const LateralScroll = () => {
  const akkida = Content.akkida;
  const divs = [];
  for (let i = 0; i < 10; i++) {
    divs.push(<div className={"rounded-t-3xl bg-white bg-opacity-50 border-4 w-44 mem"}>
    <img src={akkida} alt="" className={'rounded-full'}/>
    <h4 className={'text-center font-bold text-lg mt-10'}>Varun Kharkwal</h4>
    <p className={'text-center'}>Web-Developer</p>
    </div>);
  }
  return (
    <section className="my-20 px-10 flex justify-center h-80 gap-10 overflow-x-scroll flex-wrap flex-col">
      {divs}
    </section>
  );
};

export default LateralScroll;