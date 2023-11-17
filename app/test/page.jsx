"use client";
import { useEffect, useRef } from "react";
const TestPage = () => {
    const spanRef = useRef(null);
    return (
        <><input ref={spanRef} />
        </>
    )
};
export default TestPage;