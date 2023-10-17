"use client";

import React, { useState } from 'react';

function RegistrationForm({params}) {
    const [collegeName, setCollegeName] = useState('');
    const [teamName, setTeamName] = useState('');
    const [captainName, setCaptainName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [screenshot, setScreenshot] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`College Name: ${collegeName}, Team Name: ${teamName}, Captain Name: ${captainName}, Contact Number: ${contactNumber}, Screenshot: ${screenshot}`);
        // You can replace the console.log statement with your own code to submit the form data to your server.
    };

    const handleScreenshotChange = (event) => {
        setScreenshot(event.target.files[0]);
    };

    return (
        <main className='flex flex-wrap justify-center items-center'>
        <h3 className='text-2xl font-bold mb-5 w-full text-center sm:text-3xl '>{params.sport.toUpperCase()} Tournament Registration Form</h3>
        <form id='form-box' className='bg-green-200 py-10 rounded-2xl mx-5 w-[calc(100%-2.5rem)] bg-opacity-50 max-w-3xl' onSubmit={handleSubmit}>
            <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
                <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="collegeName">College Name:</label>
                <input className='form-box h-7 px-2 rounded w-8/12 sm:mx-2 sm:w-full' type="text" id="collegeName" value={collegeName} onChange={(event) => setCollegeName(event.target.value)} required />
            </div>
            <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
                <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="teamName">Team Name:</label>
                <input className='form-box h-7 px-2 rounded w-8/12 sm:mx-2 sm:w-full' type="text" id="teamName" value={teamName} onChange={(event) => setTeamName(event.target.value)} required />
            </div>
            <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
                <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="captainName">Captain Name:</label>
                <input className='form-box h-7 px-2 rounded w-8/12 sm:mx-2 sm:w-full' type="text" id="captainName" value={captainName} onChange={(event) => setCaptainName(event.target.value)} required />
            </div>
            <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
                <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="contactNumber">Contact Number:</label>
                <input className='form-box h-7 px-2 rounded w-8/12 sm:mx-2 sm:w-full' type="tel" id="contactNumber" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} required />
            </div>
            <div className='flex flex-wrap justify-center items-center mb-5 sm:justify-start sm:m-10'>
                <label className='w-full font-bold px-2 text-center sm:text-left sm:text-2xl' htmlFor="screenshot">Upload Screenshot:</label>
                <input className='form-box sr-only' type="file" id="screenshot" accept="image/*" onChange={handleScreenshotChange} required />
                <div className='w-full m-2 sm:w-auto'>
                    {screenshot
                    ?<><img className='w-full' src={URL.createObjectURL(screenshot)} alt="Screenshot" />
                    <div onClick={()=>{document.getElementById('screenshot').click()}} className='hover:underline float-left'>Change Image</div>
                    <div onClick={()=> {setScreenshot(null)}} className='hover:underline float-right'>Remove Image</div></> 
                    :<span onClick={()=>{document.getElementById('screenshot').click()}} className='cursor-pointer form-box px-4 py-1 rounded text-center text-white border-2 border-white bg-green-300'>Click Here To Upload</span>}
                </div>
            </div>
            <div className="w-full flex justify-center items-center h-16"><button className='form-box bg-white h-12 px-4 rounded-2xl border-green-200 active:bg-green-500 hover:border-green-400 border-4' type="submit">Submit</button></div>
        </form>
        </main>
    );
}

export default RegistrationForm;