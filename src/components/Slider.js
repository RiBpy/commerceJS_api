import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import React, { useState } from "react";
import { ApiSlides } from "../utils/SliderApi";
import "./Slider.css";
const Slider = () => {
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";


  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  var theInterval;
    theInterval = setInterval(nextSlide, 5000);
function stopSlide() {
    clearInterval(theInterval);
}
  return (
    <div className="slider h-[540px] bg-white flex items-center justify-between mobile:hidden" >
      {/* left Arrow */}
      <div onClick={prevSlide}  >
        <ArrowCircleLeftIcon className="text-gray-800 cursor-pointer" style={{fontSize:"40px"}}/>
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                slide.background
              }
              key={index}
              onMouseOver={stopSlide()}
            >
              <div className={`${slideStyle} px-4`}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                  <img
                    className=" h-[100%] object-cover"
                    src={slide.src}
                    alt="man"
                  />
                </div>
                <div className="description flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px] text-white uppercase">{slide.content.h2}</h2>
                  <p className=" text-[30px] text-xs text-gray-300">{slide.content.p}</p>
                  <button className="py-2 px-4 bg-transparent border-y-2 my-4 rounded-sm text-gray-300 uppercase hover:bg-gray-300 hover:text-gray-900 ">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}

      <div  onClick={nextSlide}>
        <ArrowCircleRightIcon className="text-gray-800 cursor-pointer" style={{fontSize:"40px"}} />
      </div>
    </div>
  );
};

export default Slider;
