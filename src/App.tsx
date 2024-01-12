import React from "react";
import "./App.css";
import Typing from "./components/Typing";
import Onscroll from "./components/Aboutme";

function App() {
  return (
    <>
      <div className="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mx-auto flex flex-col items-center space-y-20">
        <Typing />
        <Onscroll />
      </div>
    </>
  );
}

export default App;
