import Navbar from"../navbar";
import AV from "../image/avatar.jpg";
import styled, { keyframes,css } from "styled-components"
import "./style.css"

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-100px); }
`;

const Wrapper = styled.div`
  display: inline-block;
  font-size: 50px;
  color : rgba(0,139,255,0.8);

  span {
    opacity: 0;
    display: inline-block;
    animation: ${animation} 6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards infinite;
  }
`;

export default function Root() {
    const text = "Web Developper";

    const words = text.split('&nbsp');
  return (
    <div className="Root">
      <div className="content">
        <img src={AV} alt="" />

        <div className="text">
          <h3>Hi, I am Khang</h3>
          <div className="TextAnimation">
          <h3>I am a </h3>
          <a>
          {text.split('').map((char, index) => (
    <Wrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
        {char === ' ' ? <span>&nbsp;</span> : <span>{char}</span>}
    </Wrapper>
))}


          </a>
  
          </div>
          
          
        </div>
      </div>
    </div>
  );
}