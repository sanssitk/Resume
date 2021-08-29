import React, { useState } from "react";
import "./Accordion.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Accordion({ header, body, icon, hl }) {
  
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const handleClick = () => {
    setActiveState(setActive === "" ? "active" : "");
    // setHeightState(setActive === "active" ? "0px" : {refs.inner.clientHeight});
    setHeightState(setActive === "active" ? "0px" : `${5000}px`);
  };

  return (
    <div className="accordion__section">
      {hl}
      <div onClick={handleClick} refs="inner" className={`accordion ${setActive}`}>
        {header}
        {icon}
        <div className="accordion__indicator">
          {!setActive ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </div>
      </div>

      <div
        className="accordion__content "
        style={{ maxHeight: `${setHeight}` }}
      >
        {body}
      </div>
    </div>
  );
}

export default Accordion;
