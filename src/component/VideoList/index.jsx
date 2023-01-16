import React from 'react';
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./video-list.scss"
import VideoItem from 'component/VideoItem';
import { FeatureMovie, MovieList } from "component/data";



const VideoList = ({type}) => {
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
           <span className='listTitleV'>{type}</span>
           <div className="wrapperV">
           <ArrowBackIosOutlined
            className="sliderArrowV left"
            onClick={() => handleClick("left")}
           />
           <div className='container'
           ref={listRef}
           >
               {MovieList.map((movie, i) => (
                   <VideoItem 
                    key={i}
                     item={movie.image}
                     title={movie.title}
                     />
               ))}
           </div>
           <ArrowForwardIosOutlined
           className="sliderArrowV right"
           onClick={() => handleClick("right")}
           />
         </div>
       </div>
      
       </>
     )
   }
   
   export default VideoList