import LateralScroll from '@components/LateralScroll';
import SportsTypeBox from '@components/SportsTypeBox';
import EndurenceCup from '@components/EndurenceCup';
import Faculty from '@components/Faculty';
const HomePage = () => {
  return (
    <>
    <EndurenceCup />
    <main className='z-10 relative'>
      <div className="w-full py-10 mt-[calc(60vh-6rem)] bg-white overflow-hidden">
        <SportsTypeBox />
      </div>
      <Faculty />
      <LateralScroll/>
      <div className="h-24"></div>
    </main>
    </>
  )
}

export default HomePage;