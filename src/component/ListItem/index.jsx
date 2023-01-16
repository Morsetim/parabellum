import React, { useEffect, useState } from "react";
import axios from "axios";
import "./listItem.scss";
import { ReactComponent as Tomatoes } from "assets/icons/tomatoes.svg";
import { FeatureMovie } from "component/data";


const ListItem = ({item, country, title, price, percentage, genre}) => {
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
    <div className="list-container">
      <div className="listItem">
        <img src= {item}/>
      </div>
      <div className="list-details">
        <p className="cont">{country}</p>
        <p className="str">{title}</p>
      <div className="imdb">
          <div className="imdb-1">
            <p className="imdb-p">IMDb</p>
            <p className="imdb-price">{price}</p>
          </div>
          <div className="imdb-2">
            <span className="toma">
              <Tomatoes />
            </span>
            <p className="per">{percentage}</p>
          </div>
        </div>
        <p className="genre">{genre}</p>
      </div>
    </div>
    </>
  );
};

export default ListItem;
