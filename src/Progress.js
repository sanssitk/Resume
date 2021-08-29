import React, { useState } from "react";
import "./Progress.css"

const Progress = ({ done, background }) => {
  const [style, setStyle] = useState({});

  setInterval(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      background: `${background}`,
    };
    setStyle(newStyle);
  }, 1500);


  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
