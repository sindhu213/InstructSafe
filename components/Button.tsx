"use client";
import { useState } from "react";

export default function Button() {
    const [count, setCount] = useState<number>(0);
    const handleClick = () =>{
        setCount(count => count + 1)
    }
    return (
        <button onClick={handleClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            You pressed me {count} times!
        </button>
    );
}
