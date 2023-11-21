"use client";
import Auth from "@components/Auth";
import Provider from "@components/Provider";
import { useSession } from "next-auth/react";
import { useRef } from "react";
const TestPage = (status) => {
    <h1 className="text-center text-3xl">{status}</h1>
    const spanRef = useRef(null);
    return (
        <input ref={spanRef} />
    )
};
export default function () {
    const status = 'lol';
    return (
        <Provider>
            <TestPage status={status} />
        </Provider>
    )
}