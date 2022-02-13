import React from "react";
import "./App.css";
import "animate.css";

function App() {
  const audio = new Audio("./BabyImYours.mp3");

  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
  };

  return (
    <div className="page-wrapper">
      <div className="heart-app">
        <h4 className="click-me">Click the heart!</h4>
        <div className="title">
          <h3 class="animate__animated animate__heartBeat">Baby I'm Yours</h3>
          <h4>Happy Valentine's Day!</h4>
          <h3>14/02/2022 </h3>
          <h4>Susannah & Dylan </h4>
          <button onClick={stop}>Stop</button>
        </div>

        <div className="heart" onClick={start}></div>
      </div>
    </div>
  );
}

export default App;
