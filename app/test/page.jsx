"use client";
import Provider from "@components/Provider";
import { useRef } from "react";
const TestPage = () => {
    const spanRef = useRef(null);
    return (
        <input ref={spanRef} />
    )
};
export default function () {
    const status = 'lol';
    return (
        <Provider>
            <TestPage />
        </Provider>
    )
}