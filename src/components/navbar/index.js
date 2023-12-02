import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";
import { Bio } from '../../data/constants';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Navbar = () => {
    return (
        
        <div className="Nav">
            <div className="NavContainer">
                <div className="NavItems">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                
                </div>

                <div className="github">
                <a href={Bio.github} target="_blank">Github Profile</a>
                </div>
                
        
            </div>
        </div>
    );
}

export default Navbar;