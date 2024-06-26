const FormBox = (params) => {
  if (params.parameter === 'Contact Number') {
    return <FormPhone parameter={params.parameter} name={params.name} colortheme={params.colortheme} />
  }
  else if (params.parameter === 'Year') {
    return <FormYear parameter={params.parameter} name={params.name} colortheme={params.colortheme} />
  }
  else if (params.parameter === 'Category') {
    return <FormCategory parameter={params.parameter} name={params.name} colortheme={params.colortheme} />
  }
  else if (params.parameter === 'UPI ID (payment proof)') {
    return <FormUPI parameter={params.parameter} name={params.name} colortheme={params.colortheme} amount={params.amount} QR={params.QR} />
  }
  else {
    return <FormInput parameter={params.parameter} name={params.name} colortheme={params.colortheme} />
  }
};
const FormInput = (params) => {
  return (
    <div className='FormDiv'>
      <label className={`FormLabel text-${params.colortheme}`} htmlFor={params.parameter.replace(/\s/g, "")}>{params.parameter}:</label>
      <input className='FormInput' name={params.name} type="text" id={params.parameter.replace(/\s/g, "")} required />
    </div>
  )
};
const FormYear = (params) => {
  return (
    <div className='FormDiv'>
      <label className={`FormLabel text-${params.colortheme}`}>{params.parameter}:</label>
      <div className='flex justify-evenly w-full'>
        <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='1st'>1st</label>
          <input id='1st' className='cursor-pointer' name={params.name} type='radio' value='1st' required /></div>
        <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='2nd'>2nd</label>
          <input id='2nd' className='cursor-pointer' name={params.name} type='radio' value='2nd' required /></div>
        <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='3rd'>3rd</label>
          <input id='3rd' className='cursor-pointer' name={params.name} type='radio' value='3rd' required /></div>
        <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='4th'>4th</label>
          <input id='4th' className='cursor-pointer' name={params.name} type='radio' value='4th' required /></div>
      </div>
    </div>
  )
}
const FormCategory = (params) => {
  return (
    <div className='FormDiv'>
      <label className={`FormLabel text-${params.colortheme}`}>{params.parameter}:</label>
      <div className='md:flex justify-evenly w-full'>
        <section className='flex justify-evenly w-full'>
          <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='55-60'>55-60</label>
            <input id='1st' className='cursor-pointer' name={params.name} type='radio' value='60-65' required /></div>
          <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='60-65'>60-65</label>
            <input id='1st' className='cursor-pointer' name={params.name} type='radio' value='60-65' required /></div>
          <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='60-65'>65-70</label>
            <input id='2nd' className='cursor-pointer' name={params.name} type='radio' value='60-65' required /></div>
        </section>
        <section className='flex justify-evenly w-full'>
          <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='70-75'>70-75</label>
            <input id='3rd' className='cursor-pointer' name={params.name} type='radio' value='70-75' required /></div>
          <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='75-80'>75-80</label>
            <input id='4th' className='cursor-pointer' name={params.name} type='radio' value='75-80' required /></div>
          <div className=''><label className={`FormLabel text-${params.colortheme} cursor-pointer select-none`} htmlFor='80<'>80&lt;</label>
            <input id='4th' className='cursor-pointer' name={params.name} type='radio' value='80<' required /></div>
        </section>
      </div>
    </div>
  )
};
const FormUPI = (params) => {
  return (
    <>
      <div className='FormDiv'>
        <label className={`FormLabel text-${params.colortheme}`} htmlFor={params.parameter.replace(/\s/g, "")}>{params.parameter}:</label>
        <input className='FormInput' name={params.name} type="text" id={params.parameter.replace(/\s/g, "")} required />
      </div>
      <h3 className={`text-center font-bold text-xl md:text-3xl ntexts text-${params.colortheme}`}>{params.amount}</h3>
      <div className="FormDiv">
        <img src={params.QR} alt="" className='w-full h-full p-10' />
      </div>
    </>
  )
};
const FormPhone = (params) => {
  return (
    <div className='FormDiv'>
      <label className={`FormLabel text-${params.colortheme}`} htmlFor="contactNumber">{params.parameter}:</label>
      <input className='FormInput' type="tel" id="contactNumber" name={params.name} pattern="[0-9]{10}" minLength={10} maxLength={10} required />
    </div>
  )
};

export default FormBox;