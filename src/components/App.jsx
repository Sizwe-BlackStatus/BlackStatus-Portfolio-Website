import React from "react"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Navbar from "./Logo"
import Portfolio from "./Portfolio"

function App(){
    return(
        <div>
            <Navbar />
            <Home />
            <About />
            <Contact />
            <Portfolio />
        </div>
    )
}

export default App