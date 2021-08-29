import React from "react";

function EmploymentTitle({heading, background}) {
  return (
    <div className="employmentTitle">
      <div 
      className="employment__title"
      style={{background: `${background}`}}
      >{heading}</div>
    </div>
  );
}

export default EmploymentTitle;
