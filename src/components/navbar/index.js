import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import "./style.css";
import { Bio } from '../../data/constants';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Navbar = () => {
    const [showContact, setShowContact] = useState(false);

  const handleContactToggle = () => {
    setShowContact(!showContact);
  };
    return (
        
        <div className="Nav">
            <div className="NavContainer">
                <div className="NavItems">
                    <div className="AP">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    </div>
                    
                    <div className="contact-dropdown" onClick={handleContactToggle} onClick={handleContactToggle}>
                        <span>Contact</span>
                        {showContact && (
                            <div className="contact-links">
                            <a href="https://discord.com/channels/@me/" target="_blank" rel="noopener noreferrer" className="social-link">
                            Discord
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                            Facebook
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                            Instagram
                            </a>
                        </div>
                        )}
                    </div>
                </div>

                <div className="github">
                <a href={Bio.github} target="_blank">Github Profile</a>
                </div>
                
        
            </div>
        </div>
    );
}

export default Navbar;