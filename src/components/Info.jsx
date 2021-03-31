import React from "react";

function info(props) {
  return (
    <li>
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <p>{props.location}</p>
    </li>
  );
}

export default info;
