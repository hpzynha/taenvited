import React from "react";
import { Link } from "react-router-dom";

import HomeImage from "../assets/images/HomePageImg.svg"

import '../assets/styles/HomePage.scss'


const HomePage = () => {
  return (
  
    <div className="home-container">
      <div className="home">
        <div className="home-text-container">
          <div className="home-title">
            Imagine if <span className="middle">Snapchat</span> had events
          </div>
          <div className="home-subtitle">
          Easily host and share events with your friends <br/>across any social media <br/>
          </div>
          <div className="home-create-event-button-container inside">
                        <Link to='/event'>
                            <button>&#127881; Create my event</button>
                        </Link>
                    </div>
        </div>
        <div className="home-image-container">
                    <img src={HomeImage} alt='birthday event landing image'/>
                </div>
                <div className="home-create-event-button-container outside">
                    <Link to='/event'>
                        <button>Create my event</button>
                    </Link>
                </div>
      </div>
    </div>
  );
};

export default HomePage;
