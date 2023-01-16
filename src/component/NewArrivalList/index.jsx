import React from 'react';
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./naList.scss"
import ListItem from 'component/ListItem';
import { NewArrival } from "component/data";

const NewArrivalList = ({type}) => {
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
        <span className='listTitle'>{type}</span>
        <div className="wrapper">
        <ArrowBackIosOutlined
         className="sliderArrow left"
         onClick={() => handleClick("left")}
        />
        <div className='container'
        ref={listRef}
        >
            {NewArrival.map((movie, i) => (
                <ListItem 
                  key={i}
                  item={movie.image}
                  country={movie.country}
                  title={movie.title}
                  price={movie.price}
                  percentage={movie.percentage}
                  genre={movie.genre}
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

export default NewArrivalList