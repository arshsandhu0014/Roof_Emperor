import React from "react";
import "./about.css";
import Youtube from "../../assets/youtube.svg";
import Facebook from "../../assets/facebook.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Instagram from "../../assets/instagram.svg";

const About = () => {
  return (
    <div className='about-main'>
      <div className='about-main-text'>
        <h4>
          Developed with <span style={{ color: "red" }}>❤</span> by Arshdeep singh Sandhu
          
        </h4>
        <p>
          Roofemperor is webiste to book pgs or residentials for students. It
          provodes a hassle free platform for people to book residential places
          online. Without having to worry about going to each one of them, you
          can take a look at all the options from the comfort of your home.
        </p>
        <div className='icons'>
          <img src={Youtube} alt='youtube' />
          <img src={Facebook} alt='facebook' />
          <img src={Whatsapp} alt='whatsapp' />
          <img src={Instagram} alt='instagram' />
        </div>
      </div>
    </div>
  );
};

export default About;
