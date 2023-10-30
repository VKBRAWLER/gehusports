"use client";
import FormBox from '@components/FormBox';
import React, { useEffect, useState } from 'react';
import FullScreenVideo from '@components/FullScreenVideo';
import Register from '@data/json/register.json';
import Content from '@components/Content'
function RegistrationForm({params}) {
    const bgsportsvideo = Content.BGVideo[0].link;
    const video = Content.BGVideo.map((i) => { if (i.name == params.sport.toUpperCase()) { return i.link}});
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
        <FullScreenVideo link={bgsportsvideo} type={'fixedbgvideo'} />
        <main className='flex flex-wrap justify-center items-center relative z-10'>
        <h3 className='text-2xl font-bold  w-full text-center sm:text-3xl texts'>{params.sport.toUpperCase()} Tournament Registration Form</h3>
        <form id='form-box' className="bg-yellow-200 py-10 rounded-2xl m-5 w-[calc(100%-2.5rem)] bg-opacity-30 max-w-3xl min-h-full" action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSeopyp5TPNb0iGUUia1sroZdwGK8Gk32Xp2arvfw06lr2SEvg/formResponse'>
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