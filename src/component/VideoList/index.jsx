import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
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
           <ArrowBackIosNewOutlinedIcon
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
           <ArrowForwardIosOutlinedIcon
           className="sliderArrowV right"
           onClick={() => handleClick("right")}
           />
         </div>
       </div>
      
       </>
     )
   }
   
   export default VideoList