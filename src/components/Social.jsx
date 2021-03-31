import React from "react";

function Social(props) {
  return (
    <li>
      <a href={props.link}>
        <img src={props.socialIcon} alt=""></img>
      </a>
    </li>
  );
}

export default Social;
