import React from "react";
import "./Profile.css";
import sanjay from "./sanjay.jpg";

function Profile() {
  return (
    <>
      <div className="profile__container">
        <div id="profile__left" className="profile__left">
          <img className="profile__image" src={sanjay} alt="" />
          <div className="profile__title">
            <h1>Sanjay</h1>
            <h4>Full Stack Software Engineer</h4>
          </div>
        </div>

        <div className="profile__right">
          <ul>
            <li>Name: Sanjay Shrestha</li>
            <li>Exp Years: 5 Years</li>
            <li>Location: Irving, Tx</li>
            <li>
              <a href="/">Download CV</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
