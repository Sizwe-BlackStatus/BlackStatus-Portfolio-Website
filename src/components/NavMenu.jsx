import React from "react";
import { Link } from "react-scroll";

function NavMenu(props) {
  return (
    <li>
      <Link
        to={props.path}
        smooth={true}
        duration={500}
        exact="true"
        offset={-80}
      >
        {props.name}{" "}
      </Link>
    </li>
    
  );
}

export default NavMenu;
