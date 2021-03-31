import React from "react";

function Menu(props) {
  return (
    <li>
      <a href={props.path}>{props.name}</a>
    </li>
  );
}

export default Menu;
