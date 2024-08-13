import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
     const [click, setClick] = useState(false);
    return(
       <nav>
        <Link to="/" className="title">WABISABI PROJECT</Link>
        <div className="menu" onClick={() =>{
            setClick(!click)
        }}>
            <span></span> 
            <span></span> 
            <span></span> 

        </div>
        <ul className={click ? "open" : ""}>
            <li><Link to="/workshops">Workshops</Link></li>
            <li><Link to="/collections">Collections</Link> </li>
            <li><Link to="/notes">Notes</Link></li>
        </ul>
       </nav>
    )
}