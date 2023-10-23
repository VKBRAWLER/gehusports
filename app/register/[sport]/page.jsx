"use client";
import {FormInput, FormImage, FormPhone} from '@sections/FormBox';
import React, { useState } from 'react';
import FullScreenVideo from '@components/FullScreenVideo';
function RegistrationForm({params}) {
    const bgsport = 'https://cdn.discordapp.com/attachments/1162451241872412902/1163850691748560926/hd0037.mov?ex=6541136c&is=652e9e6c&hm=6b7c0d047cf3d9dd5493c45aed7a0cdca1aad78656db5e69cf48de3f9965db8c&';
    return (
        <>
        <FullScreenVideo link={bgsport} type={'fixedbgvideo'} />
        <main className='flex flex-wrap justify-center items-center relative z-10'>
        <h3 className='text-2xl font-bold  w-full text-center sm:text-3xl texts'>{params.sport.toUpperCase()} Tournament Registration Form</h3>
        <form id='form-box' className="bg-yellow-200 py-10 rounded-2xl m-5 w-[calc(100%-2.5rem)] bg-opacity-30 max-w-3xl">
            <FormInput parameter={'College Name'} />
            <FormInput parameter={'Team Name'} />
            <FormInput parameter={'Team Captain'} />
            <FormPhone parameter={'Contact Number'} />
            <FormImage parameter={'Upload Screenshot'} />
            <div className="w-full flex justify-center items-center h-16"><button className="form-box bg-white h-12 px-4 rounded-2xl border-yellow-200 active:bg-yellow-500 hover:border-yellow-400 border-4" type="submit">Submit</button></div>
        </form>
        </main>
    </>
    );
}

export default RegistrationForm;