import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { useRef, useState } from "react";
import "./list.scss"
import ListItem from 'component/ListItem';
import { FeatureMovie } from "component/data";

const List = ({type}) => {
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
        <ArrowBackIosNewOutlinedIcon
         className="sliderArrow left"
         onClick={() => handleClick("left")}
        />
        <div className='container'
        ref={listRef}
        >
            {FeatureMovie.map((movie, i) => (
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
        <ArrowForwardIosOutlinedIcon
        className="sliderArrow right"
        onClick={() => handleClick("right")}
        />
      </div>
    </div>
   
    </>
  )
}

export default List