import React from "react";
import "./style.css";
import IM from "../image/imageweb.PNG"
import SL from "../image/solar.PNG"
const Skill = () => {
    return (
        <div className="Project">
            
            <div className="text">
                    <h2>Projects</h2> 
                    <h4>what <span class="blue-text">I have built</span></h4>
            </div>
            
            <div className="PJ1">
                
                <img src= {IM} alt=""/>
                

                <div className="Left">
                    <div className="List">
                        <div className="P1">
                            <h4>Web Music Player</h4>
                            <div className="Tools">
                                <a >React Js</a>
                                <a >Node Js</a>
                                <a >Firebase</a>
                                    
                            </div>
                        </div>
                    </div>

                    <div className="TextDescribe">
                            <p>The web music player clone is a responsive and interactive <br/> application designed to provide users with a seamless <br/> music streaming experience. It replicates the core features <br/> of popular music platforms, allowing users to discover, play,<br/> and manage their favorite music.</p>
                    </div>

                    <div className="Website">
                        <a href= "https://github.com/Tyn03/SWeb">
                            <p>Source Code</p>    
                        </a>
                        <a href= "https://tyn03.github.io/SWeb/">
                            <p>View Page</p>    
                        </a>
                    </div>



                    
                    
                </div>

                
                
            </div>





            <div className="PJ2">
                
                <img src= {SL} alt=""/>
                

                <div className="Left">
                    <div className="List">
                        <div className="P1">
                            <h4>Solar System</h4>
                            <div className="Tools">
                                <a >React Js</a>
                                <a >Three Js</a>
                                
                                    
                            </div>
                        </div>
                    </div>

                    <div className="TextDescribe">
                            <p>The dynamic system that consists of the Sun, planets, moons, asteroids, <br/> comets, and other celestial objects bound together by gravity. .</p>
                    </div>

                    <div className="Website">
                        <a href= "https://github.com/Tyn03/solar-system">
                            <p>Source Code</p>    
                        </a>
                        <a href= "https://antiinsa.github.io/solar-demo/">
                            <p>View Page</p>    
                        </a>
                    </div>



                    
                    
                </div>

                
                
            </div>
        </div>
    );
}

export default Skill;