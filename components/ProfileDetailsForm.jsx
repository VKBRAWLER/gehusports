import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
const ProfileDetailsForm = () => {
  const { data: session } = useSession()
  const [details, setDetails] = useState({
    name: session?.user.name,
    image: session?.user.image
  })
  const changeDetails = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value
    })
  }
  useEffect(() => {
    console.log(details)
    
  }, [details])
  return (
    <div className="border-2 border-black">
      <h1 className="text-4xl font-bold my-3">Change Details</h1>
      <form className=" w-full">
        <label htmlFor="name">Full Name</label>
        <input className="border-2 " type="text" id='name' onChange={(e) => { changeDetails(e) }} />
        <FormImage />
        <button className="border-2 p-2 bg-blue-600">Save changes</button>
      </form>
    </div>
  )
}
const FormImage = (params) => {
  const SSinput = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  const handleScreenshotChange = (event) => {
    setScreenshot(event.target.files[0]);
  };
  const handleScreenshotClick = () => {
    SSinput.click();
    setScreenshot(null);
  }
  return (
    <div className='FormDiv bg-cyan-400'>
      <label className={`FormLabel text`} htmlFor="screenshot">User Image:</label>
      <input className='form-box sr-only' ref={SSinput} type="file" id="screenshot" accept="image/*" onChange={handleScreenshotChange} />
      <div className='w-full m-2'>
        {screenshot
          ? <>
            <div className="w-full flex justify-center"><img className='h-4/5 w-3/5' src={URL.createObjectURL(screenshot)} alt="Screenshot" /></div>
            <div onClick={() => { handleScreenshotClick() }} className='cursor-pointer md:text-xl hover:underline float-left'>Change Image</div>
            <div onClick={() => { setScreenshot(null); }} className='cursor-pointer md:text-xl hover:underline float-right'>Remove Image</div>
          </> :
          <div className='flex justify-center w-full'><span onClick={() => { handleScreenshotClick() }} className="cursor-pointer form-box px-4 py-1 rounded text-white border-2 border-white bg-yellow-300">Click Here To Upload</span></div>
        }
      </div>
    </div>
  )
};
export default ProfileDetailsForm;