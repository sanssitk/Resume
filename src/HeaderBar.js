import React from "react";
import "./HeaderBar.css";

function HeaderBar({ value, className }) {
  return (
    <div className={className}>
    {/* <div className="header__bar" className={className}> */}
      <h1>{value}</h1>
    </div>
  );
}

export default HeaderBar;
