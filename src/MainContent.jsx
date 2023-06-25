// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MainContent.css';
import Photo from "./components/Photo.jsx";
import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Interests from "./components/Interests.jsx";
import Footer from "./components/Footer.jsx";

export default function MainContent(){
    return (
        <>
            <Photo />
           <div className='sub-container'>
              <Info />
              <About />
              <Interests />
           </div>
            <Footer />
        </>
    )
}