import React from "react";
import ParticleSystem from "../components/ParticleSystem";
// import Particle from "react-particles-js";
// import particlesConfig from "../assets/particlesConfig.json";

function App() {
  return (
    <>
      <ParticleSystem/>
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">Karthik Sundar</h1>
          <h2 className="App-text__body">
            Freelance Full Stack Developer | Designer | 3D Artist
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
