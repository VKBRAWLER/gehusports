"use client";
import FormBox from '@components/FormBox';
import React, { useEffect, useState } from 'react';
import FullScreenVideo from '@components/FullScreenVideo';
import Register from '@data/json/register.json';
function RegistrationForm({params}) {
    const bgsport = 'https://cdn.discordapp.com/attachments/1162451241872412902/1163850691748560926/hd0037.mov?ex=6541136c&is=652e9e6c&hm=6b7c0d047cf3d9dd5493c45aed7a0cdca1aad78656db5e69cf48de3f9965db8c&';
    const [RegisterList, setRegisterList] = useState([]);
    useEffect(() => {
        for (let i = 0; i < Register.length; i++) {
            if (Register[i].SportsName === params.sport.toLowerCase()) {
                setRegisterList(Register[i]);
                break;
            }
        }
    }, [])
    return (
        <>
        <FullScreenVideo link={bgsport} type={'fixedbgvideo'} />
        <main className='flex flex-wrap justify-center items-center relative z-10'>
        <h3 className='text-2xl font-bold  w-full text-center sm:text-3xl texts'>{params.sport.toUpperCase()} Tournament Registration Form</h3>
        <form id='form-box' className="bg-yellow-200 py-10 rounded-2xl m-5 w-[calc(100%-2.5rem)] bg-opacity-30 max-w-3xl" action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSesmi_yn4HL3M3p9ONBbelhLrIKDraKm6eHZqYqgHoGTFXfIw/formResponse'>
        {Object.entries(RegisterList).map(([key, value], index) => {
            if (key === 'SportsName') {
                return null;
            }
            else if (value) {
                return <FormBox parameter={key} name={value} key={index}/>
            }
        })}
        {/* https://www.geeksforgeeks.org/javascript-object-entries-method/ */}
        <div className="w-full flex justify-center items-center h-16"><button className="form-box bg-white h-12 px-4 rounded-2xl border-yellow-200 active:bg-yellow-500 hover:border-yellow-400 border-4" type="submit">Submit</button></div>
        </form>
        </main>
    </>
    );
}

export default RegistrationForm;