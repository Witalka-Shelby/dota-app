import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Card from "./components/Card";

function App() {
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(0);
  const [rune, setRune] = useState(false);
  let [runeMessage, setRuneMessage] = useState("");
  const [pause, setPause] = useState(false);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      let message = "";

      // Bounty 3 min
      if (count % 180 === 0) {
        message += "Bounty \n";
        if (count >= 60) {
          message += "Lotus \n";
        }
        setRune(true);
        setTimeout(() => setRune(false), 5000);
      }
      // Power 2 min
      if (count % 120 === 0) {
        if (count > 60) {
          if (count < 300) {
            message += "Water \n";
          } else {
            message += "Power \n";
          }
          setRune(true);
          setTimeout(() => setRune(false), 5000);
        }
      }

      if (message !== "") {
        setRuneMessage(message);
      }

      if (!pause) {
        setCount(count + 1);
      }
    }, 250);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count, rune]);

  function handleClick(event) {
    console.log(event);
    if (event !== undefined) {
      setPause((prevVal) => {
        console.log(prevVal);
        return !prevVal;
      });
    }
    setExpand((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className="App">
      <h1 className="title">Dota 2 Timer</h1>
      <Button onClick={handleClick}>pause</Button>
      <Card
        expand={expand}
        handleClick={handleClick}
        rune={rune}
        runeMessage={runeMessage}
        count={count}
      />
    </div>
  );
}

export default App;
