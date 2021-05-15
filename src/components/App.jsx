import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import SideMenu from "./sideMenu/SideMenu";

function App() {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }
  return (
    <Router>
      <Navbar toggle={toggle} />
      <SideMenu
        open={open}
        toggle={toggle}
        opacity={open ? "100%" : "0"}
        top={open ? "0" : "-100%"}
      />
      <Home />
      <About />
      <Contact />
      <Portfolio />
    </Router>
  );
}

export default App;
