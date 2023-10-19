import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import TimingsList from "./components/TimingsList";

function App() {
  const [expand, setExpand] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

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
          <Timer time={count} />
        </div>
        <div className="timings">
          <TimingsList
            time={count}
            toggleCard={handleClick}
            expandCard={expand}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
