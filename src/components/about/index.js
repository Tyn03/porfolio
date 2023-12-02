import React from "react";
import "./style.css"
import Skills from "../skills";
import insaCVL from "../image/insacvl.jpg"
import LQD from "../image/LQD.jpeg"
import FB from "../image/facebook.png"
import LK from "../image/linkedin.png"
import IG from "../image/instagram.png"
const Skill = () => {
    return (
        <div className="About">
            
            <h3>Hello, My name is Duy. I am currently a student at INSA Centre Val de
        Loire , Bourges, France. Technology is my passion, <br/> I really like playing
        with computer including both software and hardware.My actual study
        field is software engineer,<br/> I am a software developer being on my way
        to become a great technician. Great to meet you</h3>
            
            

            <div className="Skills">
                <Skills/>
            </div>

            <div className="Education">
                    <h5>Educations</h5>
                    <div className="components">
                    <img src = {insaCVL} alt=""/>
                    <p>INSA Centre Val de Loire <br />
                        Master Degree, Computer Security & Technologies <br />
                        Sep 2020 - Nov 2025</p>
                    </div>

                    <div className="components">
                    <img src = {LQD} alt=""/>
                    <p>Le Quy Don High School <br />
                    High School Diploma, Physic Student <br/>
                    Sep 2017 - Jul 2020 </p>
                    </div>
                </div>

            <div className="Footer">
                <div className="Facebook">
                    <a href= "https://www.facebook.com/">
                    <img src = {FB} alt=""/>
                    </a>
                </div>

                <div className="Linkedin">
                    <a href= "https://www.linkedin.com/in/khang-do-a8aa96224/">
                    <img src = {LK} alt=""/>
                    </a>
                </div>


                <div className="Instagram">
                    <a href= "https://www.instagram.com/khangdoooo/">
                    <img src = {IG} alt=""/>
                    </a>
                </div>

            </div>
            
            <div className="test">
                <p>© 2023 Khang DO. All rights reserved.</p>
            </div>
            
        </div>

        
    );
}

export default Skill;