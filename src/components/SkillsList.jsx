import React from "react";
function skillsList(props) {
  return (
    <li>
      <img src={props.src} alt={props.alt}></img>
    </li>
  );
}

export default skillsList;
