import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fc-item.scss";
import { ReactComponent as Tomatoes } from "assets/icons/tomatoes.svg";
import { FeatureMovie } from "component/data";


const FcItem = ({item, name}) => {
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
    <div className="list-containerF">
      <div className="listItemF">
        <img src= {item}/>
      </div>
      <p>{name}</p>
    </div>
    </>
  );
};

export default FcItem;
