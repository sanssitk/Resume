import React from "react";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

function Employment({ title, company, timeYear, body, color }) {
  
  return (
    <div className="employment">
      <div className="employment__details">
        <FormatListBulletedIcon
          style={{ color: `${color}`, fontSize: "20px" }}
        />

        <div className="employment__details__headings">
          <h4 className="employment__details__heading__title">{title}</h4>
          <p className="employment__details__company">{company}</p>
        </div>

        <h4 className="employment__details__heading__year">{timeYear}</h4>
      </div>
      <div className="employment__details__body">{body}</div>
    </div>
  );
}

export default Employment;
