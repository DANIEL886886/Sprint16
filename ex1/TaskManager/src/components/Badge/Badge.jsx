import "./Badge.css";
import React from "react";

function Badge(props) {
  return (
    <div className="badge">

      <p>{props.status}</p>
    
    </div>
  );
}

export default Badge;
