import React from 'react';
import "./Footer.css";
import {FaHome,FaPhone,FaMailBulk, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className ="footer">
    <div className = "footer-container">
        <div className = "left">
            <div className = "location">
                <FaHome size ={20} style={{color:"#fff",marginRight:" 2rem"}}/>
                <div>
                    <p>Sant vihar Meerut.</p>
                    <p>India.</p>
                </div>
            </div>
            <div className = "phone">
                <h4>
                <FaPhone size ={20} style={{color:"#fff",marginRight:" 2rem"}}/>
                7409811439

                </h4>
            </div>
            <div className = "Email">
                <h4><FaMailBulk size = {20} style={{color:"#fff",marginRight:" 2rem"}}/>
              jainniyati17@gmail.com</h4>
                </div>   
        </div>
        <div className = "right">
            <h4>About Me</h4>
            <p>Hi,
            I am Niyati.
            </p>
            <div className = "social">
           
            <NavLink to="https://twitter.com/niyatijain_"><FaTwitter size = {30} style={{color:"#fff",marginRight:" 1rem"}}/></NavLink>
            <NavLink to="https://www.linkedin.com/in/niyati-jain-25293b233/"><FaLinkedin size = {30} style={{color:"#fff",marginRight:" 1rem"}}/></NavLink>
            <NavLink to="https://github.com/niyatijain1"><FaGithub size = {30} style={{color:"#fff",marginRight:" 1rem"}}/></NavLink>
            </div>

        </div>
    </div>
</div>
  )
}

export default Footer
