import React from "react";
import Navbar from "component/Navbar";
import { ReactComponent as Tomatoes } from "assets/icons/tomatoes.svg";
import { ReactComponent as Play } from "assets/icons/deyplay.svg";
import { DescContainer, FeaturedMain } from "./featured.styles";


const Featured = () => {


  return (
    <FeaturedMain>
      <Navbar />
      <DescContainer>
        <p className="title">John Wick 3 : Parabellum</p>
        <div className="imdb">
          <div className="imdb-1">
            <p className="imdb-p">IMDb</p>
            <p className="imdb-price">86.0 / 100</p>
          </div>
          <div className="imdb-2">
            <span className="toma">
              <Tomatoes />
            </span>
            <p className="per">97%</p>
          </div>
        </div>
        <div className="desc-text">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </div>
        <div className="watch">
            <span><Play /></span>
            <p>Watch trailer</p>
        </div>
      </DescContainer>
    </FeaturedMain>
  );
};

export default Featured;
