"use client";
import FormBox from '@components/FormBox';
import React, { useEffect, useState } from 'react';
import FullScreenVideo from '@components/FullScreenVideo';
import Register from '@data/json/register.json';
import Content from '@components/Content'
function RegistrationForm({params}) {
    const [sportsBGVideo, setSportsBGVideo] = useState(null);
    const [RegisterList, setRegisterList] = useState([]);
    const [colortheme, setColortheme] = useState('blue');
    const [textcolor, setTextcolor] = useState('blue-300');
    const [submitting, setSubmitting] = useState(false);
    useEffect(() => {
        if (submitting) {
            setTimeout(() => {
                setSubmitting(false);
            }, 3000);
        }
    }, [submitting]);
    useEffect(() => {
        for (let i = 0; i < Content.BGVideo.length; i++) {
            if (Content.BGVideo[i].name.toLowerCase() === params.sport.toLowerCase()) {
                setSportsBGVideo(Content.BGVideo[i].link);
                break;
            }
        }
        for (let i = 0; i < Register.length; i++) {
            if (Register[i].SportsName.toLowerCase() === params.sport.toLowerCase()) {
                setRegisterList(Register[i]);
                break;
            }
        }
        if (params.sport.toLowerCase() === 'cricket') {
            setColortheme('yellow');
        }
        if (params.sport.toLowerCase() === 'cricket') {
            setTextcolor('black');
        }
    }, [])
    return (
        <>
        <FullScreenVideo link={sportsBGVideo} type={'fixedbgvideo'} />
        <main className='flex flex-wrap justify-center items-center relative z-10'>
        <h3 className='text-2xl font-bold w-full text-center sm:text-3xl texts'>{params.sport.toUpperCase()} Tournament Registration Form</h3>
        <form id='form-box' className={`bg-${colortheme}-200 py-10 rounded-2xl m-5 w-[calc(100%-2.5rem)] bg-opacity-30 max-w-3xl min-h-full`} action={RegisterList.Form}>
        {Object.entries(RegisterList).map(([key, value], index) => {
            if (key === 'SportsName' || key === 'Form') {
                return null;
            }
            else if (value) {
                return <FormBox parameter={key} name={value} colortheme={textcolor} key={index}/>
            }
        })}
        {/* https://www.geeksforgeeks.org/javascript-object-entries-method/ */}
        <div onClick={()=>{setSubmitting(true)}}  className="w-full flex justify-center items-center h-16"><button className={`form-box bg-white h-12 px-4 rounded-2xl border-${colortheme}-200 active:bg-${colortheme}-500 hover:border-${colortheme}-400 border-4`} type="submit">{submitting?<>Submiting..</>:<>Submit</>}</button></div>
        <div className="sr-only text-blue-300"></div>
        <div className="sr-only text-black"></div>
        </form>
        </main>
    </>
    );
}

export default RegistrationForm;