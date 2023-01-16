import React from 'react'
import Featured from 'component/Featured';
import List from 'component/List';
import { HomeMain } from './home.style';
import VideoList from 'component/VideoList';
import FcList from 'component/FeaturedCastList';
import NewArrivalList from 'component/NewArrivalList';

const Home = () => {
  const catalogue = ["Featured Movie", "New Arrival"]

  return (
    <HomeMain>
        <Featured/>
        <List type={"Featured Movie"} />
        <NewArrivalList type={"New Arrival"} />
        <VideoList type={"Video"}/>
        <FcList type={"Featured Cast"}/>
    </HomeMain>
  )
}

export default Home;