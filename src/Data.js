//Data
import React from "react";
import ProfileBody from "./ProfileBody";
import Resume from "./Resume";
import PersonIcon from "@material-ui/icons/Person";
import SubjectIcon from '@material-ui/icons/Subject';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Profile from "./Profile";
import HeaderBar from "./HeaderBar";
import PortfolioBody from "./PortfolioBody";

import "./Data.css";

export const products = [
    {
      key: "Profile",
      id: "984616691",
      icon: <PersonIcon className="icon"/>,
      header:[<HeaderBar value="Profile" className={"profile__slider"} />, <Profile style={{borderTop: "0px"}}/> ],    
      body: <ProfileBody />,
      hl: ""
    },
    {
      key: "Resume",
      id: "984616625",
      icon: <SubjectIcon className="icon" style={{backgroundColor: "#6ca338"}}/>,
      header: <HeaderBar value="Resume" className={"resume__slider"} style={{}}/>,
      body: <Resume />,
      hl: <hr style={{ border: "0.2px solid #e5e5e5" }}/>          
    },
    {
      key: "Portfolio",
      id: "98461669184",
      icon: <BusinessCenterIcon className="icon" style={{ backgroundColor: "#ffbc38" }}/>,
      header: <HeaderBar value="Portfolio" className={"portfolio__slider"}/>,
      body: <PortfolioBody />,
      hl: <hr style={{ border: "0.2px solid #e5e5e5" }}/>            
    },
  ]

