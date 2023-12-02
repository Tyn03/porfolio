import React from "react";
import "./style.css"
import Atom from "../image/atom.png";
import TS from "../image/typescript.png";


const Skill = () => {
    return (
        <div className = "Skill">
            <div className="SkillElement">
                <div className="WebDevelopper">
                    <div className="FrontEnd">
                        Frontend
                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt=""/>
                                <figcaption>HTML</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                                <figcaption>CSS</figcaption> 
                            </div>
                            
                            <div className="SkillItem">
                                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt=""/>
                                <figcaption>JavaScript</figcaption>
                            </div>
                        
                        </div>


                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src= {Atom} alt=""/>
                                <figcaption>React</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = {TS} alt=""/>
                                <figcaption>TypeScript</figcaption> 
                            </div>
                        </div>

                    </div>

                    <div className="Backend">
                        Backend
                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt=""/>
                                <figcaption>HTML</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                                <figcaption>CSS</figcaption> 
                            </div>
                            
                            <div className="SkillItem">
                                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt=""/>
                                <figcaption>JavaScript</figcaption>
                            </div>
                        
                        </div>


                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src= {Atom} alt=""/>
                                <figcaption>React</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = {TS} alt=""/>
                                <figcaption>TypeScript</figcaption> 
                            </div>
                        </div>

                    
                    
                    </div>
                </div>

                <div className="ToolsAndOther">
                    <div className="Tools">
                            Tools
                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt=""/>
                                    <figcaption>HTML</figcaption>
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                                    <figcaption>CSS</figcaption> 
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt=""/>
                                    <figcaption>JavaScript</figcaption>
                                </div>
                            
                            </div>


                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src= {Atom} alt=""/>
                                    <figcaption>React</figcaption>
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = {TS} alt=""/>
                                    <figcaption>TypeScript</figcaption> 
                                </div>
                            </div>

                    </div>
                    
                    <div className="Others">
                            Others
                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt=""/>
                                    <figcaption>HTML</figcaption>
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                                    <figcaption>CSS</figcaption> 
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt=""/>
                                    <figcaption>JavaScript</figcaption>
                                </div>
                            
                            </div>


                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src= {Atom} alt=""/>
                                    <figcaption>React</figcaption>
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = {TS} alt=""/>
                                    <figcaption>TypeScript</figcaption> 
                                </div>
                            </div>

                        
                        
                    </div>
                </div>

            </div>

            
            
            
                
   
        </div>
    );
}

export default Skill;