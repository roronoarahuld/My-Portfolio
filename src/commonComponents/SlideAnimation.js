import React, { useEffect } from "react";

export default function SlideAnimation({onComplete}){
    useEffect(()=>{
        const timeout = setTimeout(() => {
            onComplete() //Tell parent component to show content
        }, 1500);
        return() => clearTimeout(timeout)
    },[])
    return(
        <div className="slideAnimation"></div>
    )
}