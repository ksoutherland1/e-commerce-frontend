import React from 'react'
import "./Home.scss"
import First from "../../components/home-first/First";
import Second from "../../components/home-second/Second";
import Third from "../../components/home-third/Third"
import Fourth from '../../components/home-fourth/Fourth';
import Fifth from '../../components/home-fifth/Fifth';

const Home = () => {

  return (

    <div>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>


  )
}

export default Home