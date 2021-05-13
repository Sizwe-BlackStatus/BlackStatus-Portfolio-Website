import React from "react";
function skillsList(props) {
  return (
    <div className="skill">
      <img src={props.src} alt={props.alt}></img>
    </div>
    
  );
}

export default skillsList;