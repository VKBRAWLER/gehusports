import EnduranceCup from '@components/EnduranceCup';
import Faculty from '@components/Faculty';
import Director from '@components/Director';
import Footer from '@components/Footer';
const HomePage = () => {
  return (
    <>
      <EnduranceCup />
      <main className='z-10 relative'>
        <div className="w-full py-10 mt-[calc(60vh-6rem)] bg-white overflow-hidden">
          {/* <SportsTypeBox /> */}
        <Director />
        </div>
        <Faculty />
        {/* <LateralScroll /> */}
        <div className="h-24"></div>
      </main>
      <Footer />
    </>
  )
}
export default HomePage;