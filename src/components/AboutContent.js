import './AboutContent.css';
import React from 'react';
import Reacth from "../assets/reacth.png";
import React13 from "../assets/react13.jpg";
import { Link } from 'react-router-dom';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am a aspiring software developer, I am passionate about creating interactive applications and experiences on the web.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                    <img src={Reacth} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                    <img src={React13} className="img" alt="true" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutContent
