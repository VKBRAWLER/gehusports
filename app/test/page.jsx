"use client";
import Provider from "@components/Provider";
import { useRef } from "react";
const TestPage = (params) => {
    const spanRef = useRef(null);
    return (
        <input ref={spanRef} value={params.status.split('@')[0]} />
    )
};
export default function () {
    const status = 'lol@123';
    return (
        <Provider>
            <TestPage status={status}/>
        </Provider>
    )
}