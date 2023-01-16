import React from 'react';
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./fs-list.scss"
import FcItem from 'component/FeaturedCastItem';
import { FeaturedCast } from "component/data";

const FcList = ({type}) => {
 const [slideNumber, setSlideNumber] = useState(0)
//    const [movie, setMovie] = useState(FeatureMovie);

 const listRef = useRef();

 const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x -172
    if(direction === "left" && slideNumber > 0){
        setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${314 + distance}px)`
    }
    if(direction === "right" && slideNumber < 6){
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${-278 + distance}px)`
    }
 }

  return (
    <>
    <div className='list'>
        <span className='listTitleF'>{type}</span>
        <div className="wrapper">
        <ArrowBackIosOutlined
         className="sliderArrow left"
         onClick={() => handleClick("left")}
        />
        <div className='container'
        ref={listRef}
        >
            {FeaturedCast.map((movie, i) => (
                <FcItem
                  key={i}
                  item={movie.image}
                  name={movie.name}
                  />
            ))}
        </div>
        <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={() => handleClick("right")}
        />
      </div>
    </div>
   
    </>
  )
}

export default FcList