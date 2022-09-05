import React from "react";
import "../Styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/profile.jpg";

function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            <span> Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <a href="https://github.com/aida-solat/" target="_blank" rel="noreferrer">
          <img src={Profile} alt="" />
        
          </a>
        </div>
        <h5 style={{color:"#fff", marginTop:10}}>Hi Soli</h5>
      </div>
    </div>
  );
}

export { RightMenu };
