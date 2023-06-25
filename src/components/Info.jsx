// eslint-disable-next-line no-unused-vars
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Info(){
    return (
        <>
            <h2 className='name'>Tetyana Goncharenko</h2>
            <h4 className='role'>Ruby on Rails Software Engineer</h4>
            <div className='connect'>
                <a href="mailto:tetyanago2018@gmail.com" className='mail'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/tetyana-goncharenko-42a507a4/"
                   className='linkedin'
                   target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                </a>
            </div>
        </>
    )
}