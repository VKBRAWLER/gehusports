import React, { useState } from 'react'
const FormBox = (params) => {
  if (params.parameter === 'Screenshot of Payment') {
    return <FormImage parameter={params.parameter} />
  }
  else if (params.parameter === 'Contact Number') {
    return <FormPhone parameter={params.parameter} />
  }
  else if (params.parameter === 'College Name') {
    return <FormCollege parameter={params.parameter} />
  }
  else {
    return <FormInput parameter={params.parameter} />
  }
}
const FormInput = (params) => {
  return (
  <div className='FormDiv'>
    <label className='FormLabel' htmlFor={params.parameter.replace(/\s/g, "")}>{params.parameter}:</label>
    <input className='FormInput' type="text" id={params.parameter.replace(/\s/g, "")} required />
  </div>
  )
}
const FormCollege = (params) => {
  return (
    <div className='FormDiv'>
      <label className='FormLabel' htmlFor={params.parameter.replace(/\s/g, "")}>{params.parameter}:</label>
      <select id={params.parameter.replace(/\s/g, "")} className='FormInput'>
      <option value=""></option>
      <option value="IIM kashipur">IIM kashipur</option>
      <option value="Woodbridge">Woodbridge</option>
      <option value="SSJ Almora">SSJ Almora</option>
      <option value="LSMPG">LSMPG</option>
      <option value="G. B. Pant University of Agriculture and Technology">G. B. Pant University of Agriculture and Technology</option>
      <option value="MIET">MIET</option>
      <option value="Amrapali Group of Institutes">Amrapali Group of Institutes</option>
      <option value="Pal College of Technology & Management">Pal College of Technology & Management</option>
      <option value="Motiram Baburam Govt. Post Graduate(MBPG)">Motiram Baburam Govt. Post Graduate(MBPG)</option>
      <option value="Birla Institute of Applied Sciences">Birla Institute of Applied Sciences</option>
      <option value="Dev Singh Bisht College (DSB Campus)">Dev Singh Bisht College (DSB Campus)</option>
      <option value="Graphic Era Haldwani">Graphic Era Haldwani</option>
      <option value="Graphic Era Hill University (Bhimtal)">Graphic Era Hill University (Bhimtal)</option>
      </select>
      {/* <input className='FormInput' type="text" id={params.parameter.replace(/\s/g, "")} required /> */}
    </div>
    )
}

const FormImage = (params) => {
  const [screenshot, setScreenshot] = useState(null);
    const handleScreenshotChange = (event) => {
    setScreenshot(event.target.files[0]);
  };
  return (
  <div className='FormDiv'>
    <label className='FormLabel' htmlFor="screenshot">{params.parameter}:</label>
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
  <div className='FormDiv'>
    <label className='FormLabel' htmlFor="contactNumber">{params.parameter}:</label>
    <input className='FormInput' type="tel" id="contactNumber" required />
  </div>
  )
}
export default FormBox;