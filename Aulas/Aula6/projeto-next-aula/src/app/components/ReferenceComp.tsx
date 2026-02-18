"use client";
import { useRef } from "react";

    const InputFocus = () => {
        const inputRef = useRef(null);
    return (
        <div className="flex flex-col items-center mt-8 space-y-4">
            <input ref={inputRef} type="text" className="border p-2 rounded-xl" />
            <br />
            <button className="bg-blue-500 text-white p-2 rounded mt-2 hover: cursor-pointer" onClick={() => inputRef.current.focus()}>Focar</button>
        </div>
    );
}
export default InputFocus;