import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './ErrorPage.css'
const ErrorPage = () => {
    const [position,setPosition] = useState(1)
    useEffect(()=>{
        window.addEventListener('scroll',() => {
            setPosition(window.scrollY)
        })
    },[position])
    const initialPosition = -230;
    const result = `${position + initialPosition}%`;
    console.log(result)
    return (
        <div className='error'>
            <div className="errorContent">
                <img src={require('../../utilities/images/layout/designssport_03.jpg')} alt="" className="w-100" />
            </div>
            <div className='scrollText' style={{right:`${result}`}}>
                <h1>This Page Is Not Found</h1>
            </div>
            <div className='scrollText2'>
                <h1>Please Check Your Link</h1>
            </div>
        </div>
    );
};

export default ErrorPage;