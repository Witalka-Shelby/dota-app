import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import TimingsList from "./components/TimingsList";

function App() {
  const [expand, setExpand] = React.useState(false);

  function handleClick() {
    setExpand((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className="App">
      <h1 className="title">Dota 2 Timer</h1>
      <div
        className="card"
        style={expand ? { height: "600px" } : { height: "100px" }}
      >
        <div className="timer">
          <Timer />
        </div>
        <div className="timings">
          <TimingsList toggleCard={handleClick} expandCard={expand} />
        </div>
      </div>
    </div>
  );
}

export default App;
