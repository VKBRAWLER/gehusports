import React from 'react'

const FullScreenVideo = (params) => {
  return (
    <div className='top-0 bottom-0 left-0 right-0 fixed z-0 flex justify-center items-center'><video className='max-w-none min-h-screen' src={params.link} autoPlay muted loop/></div>
  )
}

export default FullScreenVideo