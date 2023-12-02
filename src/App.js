import logo from './logo.svg';
import './App.css';
import Navbar from"./components/navbar";
import Hero from"./components/herosection";
import Skill from"./components/skills";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./components/about"; // Import your components for each route
import Projects from "./components/projects";
import AV from "./components/image/avatar.jpg";
import TextAnimation from './components/animation';
import styled, { keyframes } from "styled-components"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
