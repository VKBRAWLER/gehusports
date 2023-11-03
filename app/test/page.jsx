"use client";
import React, { useEffect, useState } from 'react';

async function importion() {
    const res = await fetch('https://valorant-api.com/v1/agents/');
    const data = await res.json();
    await new Promise(resolve => setTimeout(resolve, 5000));
    return await data.data;
}

const TestPage = async () => {
    const events = await importion()
    return (
        <>
            <div className='w-full text-center uppercase text-5xl'>TestPage</div>
            {events.map((event, index) => {
                return (
                    <div key={index} className='w-full text-white uppercase text-5xl'>{index + 1}. {event.displayName}
                        <img src={event.displayIcon} alt="" />
                    </div>
                )
            })
            }
        </>
    )
}

export default TestPage;