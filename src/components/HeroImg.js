import React from 'react';
import './HeroImg.css';
import IntroImg from '../assets/googimg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className = "hero">   
    <div className = "mask"> 
    <img className = "intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className = "content">
        <p>HI I'M NIYATI JAIN.</p>
        <h1>Aspiring Software Developer.</h1>
        <div>
            <Link to = "/projects" className = "btn">Projects</Link>
            <Link to = "/contact" className = "btn btn-light">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default HeroImg
