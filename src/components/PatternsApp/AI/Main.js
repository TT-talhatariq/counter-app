import React, { useState } from "react";
import "./Main.css";
import CreateArt from "./CreateYourArt/CreateArt";
import DareToAsk from "./DareToAsk/DareToAsk";

const Main = () => {
  const [mode, setMode] = useState("artwork");

  const switchToArt = () => {
    setMode("artwork");
  };

  const switchToDare = () => {
    setMode("dare");
  };

  return (
    <div className="main-container">
      <div className="button-container">
        <button
          class={`button-55 
            ${mode === "dare" ? "active" : ""}
        `}
          onClick={switchToDare}
        >
          Dare to Ask 🤓
        </button>
        <button
          class={`button-55 
            ${mode === "artwork" ? "active" : ""}
        `}
          onClick={switchToArt}
        >
          Create your Artwork 🌄
        </button>
      </div>

      {mode === "artwork" && <CreateArt />}

      {mode === "dare" && <DareToAsk />}
    </div>
  );
};

export default Main;
