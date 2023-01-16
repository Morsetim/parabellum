import React, { useEffect, useState } from "react";
import axios from "axios";
import "./video-item.scss";
import { ReactComponent as Tomatoes } from "assets/icons/tomatoes.svg";
import { FeatureMovie } from "component/data";


const VideoItem = ({item, country, title, price, percentage, genre}) => {
//   const [movie, setMovie] = useState(FeatureMovie);

//   useEffect(() => {
//     const getMovie = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.themoviedb.org/3/movie/55/images?api_key=6fbc21af1ba216e809843de38b27727d"
//         );
//         console.log(res);
//         // setMovie(res.data);
//       } catch (err) {}
//     };
//     getMovie();
//   }, []);

  //   console.log(movie, "==========")

  return (
    <>
    <div className="video-container">
      <div className="videoItem">
        <img src= {item}/>
      </div>
      <p>Lamb (2021) Trailer</p>
    </div>
    </>
  );
};

export default VideoItem;
