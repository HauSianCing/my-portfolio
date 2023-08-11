import React, { useState } from 'react'
import "./Slider.css";
// import BtnSlider from "BtnSlider";
export default function Slider() {
    const data =[
        {
            id:"1",
            pj_name:"How are you",
            description:"Great",
            url:"/cing-logo.png"
        },
        {
            id:"2",
            pj_name:"How are you",
            description:"Fine",
            url:"/cing-sign.png"
        },
        {
            id:"3",
            pj_name:"How are you",
            description:"Good",
            url:"/cing-logo.png"
        },
        {
            id:"4",
            pj_name:"How are you",
            description:"How about you",
            url:"/cing-sign.png"
        }
    ];
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {

    }
    const preSlide = () => {
        
    }
    return (
            <div className='container-slider'>
                {data.map((obj,index)=>{
                    return (
                        <div key={obj.id} className={slideIndex === index+1}>
                            <img src={obj.url} />
                            </div>
                    );
                })}
                <BtnSlider moveSlide={nextSlide} direction ={"next"}/>
                <BtnSlider moveSlide={preSlide} direction = {"prev"}/>

            </div>
    )
}
const BtnSlider = ({direction,moveSlide}) => {
    return(
            <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next':'btn-slide prev'}>
            {direction === "next"? '→' :'←'}
            </button>

    );

}
