import React, { useState } from 'react'
const FormBox = (params) => {
  if (params.parameter === 'Screenshot of Payment') {
    return <FormImage parameter={params.parameter} />
  }
  else if (params.parameter === 'Contact Number') {
    return <FormPhone parameter={params.parameter} />
  }
  else {
    return <FormInput parameter={params.parameter} />
  }
}
const FormInput = (params) => {
  return (
  <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
    <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor={params.parameter.replace(/\s/g, "")}>{params.parameter}:</label>
    <input className='form-box h-7 px-2 rounded w-8/12 sm:mx-2 sm:w-full' type="text" id={params.parameter.replace(/\s/g, "")} required />
  </div>
  )
}

const FormImage = (params) => {
  const [screenshot, setScreenshot] = useState(null);
    const handleScreenshotChange = (event) => {
    setScreenshot(event.target.files[0]);
  };
  return (
  <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
    <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="screenshot">{params.parameter}:</label>
    <input className='form-box sr-only' type="file" id="screenshot" accept="image/*" onChange={handleScreenshotChange} required />
    <div className='w-full m-2'>
      {screenshot
      ?<>
      <img className='w-full' src={URL.createObjectURL(screenshot)} alt="Screenshot" />
      <div onClick={()=>{document.getElementById('screenshot').click()}} className='cursor-pointer hover:underline float-left'>Change Image</div>
      <div onClick={()=> {setScreenshot(null)}} className='cursor-pointer hover:underline float-right'>Remove Image</div>
      </>:
      <div className='flex justify-center w-full'><span onClick={()=>{document.getElementById('screenshot').click()}} className="cursor-pointer form-box px-4 py-1 rounded text-white border-2 border-white bg-yellow-300">Click Here To Upload</span></div>
      }
    </div>
  </div>
  )
}

const FormPhone = (params) => {
  return (
  <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
    <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="contactNumber">{params.parameter}:</label>
    <input className='form-box h-7 px-2 rounded w-8/12 sm:mx-2 sm:w-full' type="tel" id="contactNumber" required />
  </div>
  )
}
export default FormBox;