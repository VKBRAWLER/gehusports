import { useRef, useState } from "react";
const ProfileDetailsForm = (params) => {
  const [details, setDetails] = useState({
    name: params.user.name,
    image: params.user.image
  })
  const SSinput = useRef(null);
  const [image, setImage] = useState(null);
  const changeDetails = (e) => { setDetails({ ...details, [e.target.id]: e.target.value }) }
  const handleScreenshotChange = (event) => { setImage(event.target.files[0]); };
  const handleScreenshotClick = () => { SSinput.current.click(); setImage(null); }
  return (
    <div className="border-2 border-black">
      <h1 className="text-4xl font-bold my-3">Change Details</h1>
      <form className=" w-full">
        <label htmlFor="name">Full Name</label>
        <input className="border-2 " type="text" id='name' onChange={(e) => { changeDetails(e) }} />
        <div className='FormDiv bg-cyan-400'>
          <label className={`FormLabel`} htmlFor="image">User Image:</label>
          <input className='form-box sr-only' ref={SSinput} type="file" id="image" accept="image/*" onChange={handleScreenshotChange} />
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <img src={image || params.user.image} alt="Profile picture" className="w-full h-full" />
          </div>
          <div className='w-full m-2'>
            {image
              ? <>
                <div className="w-full flex justify-center"><img className='h-4/5 w-3/5' src={URL.createObjectURL(image)} alt="Screenshot" /></div>
                <div onClick={() => { handleScreenshotClick() }} className='cursor-pointer md:text-xl hover:underline float-left'>Change Image</div>
                <div onClick={() => { setImage(null); }} className='cursor-pointer md:text-xl hover:underline float-right'>Remove Image</div>
              </> :
              <div className='flex justify-center w-full'><span onClick={() => { handleScreenshotClick() }} className="cursor-pointer form-box px-4 py-1 rounded text-white border-2 border-white bg-yellow-300">Click Here To Upload</span></div>
            }
          </div>
        </div>
        <button className="border-2 p-2 bg-blue-600">Save changes</button>
      </form>
    </div>
  )
}

export default ProfileDetailsForm;