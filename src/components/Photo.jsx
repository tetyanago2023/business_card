// eslint-disable-next-line no-unused-vars
import React from "react";
import me from "../assets/me.jpeg";

export default function Photo(){
    return (
        <>
            <div className='img-container'>
                <img className='main-img' src={me} alt="me"/>
            </div>
        </>
    )
}
