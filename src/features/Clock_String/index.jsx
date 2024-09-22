import React from "react";
import useClockString from "./algorithm/ClockString.jsx";


export default function RenderTimeAsString(){
    const time = useClockString();

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}