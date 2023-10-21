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

  // Runes
  const [bounty, setBounty] = useState(true);
  const [power, setPower] = useState(true);
  const [wisdom, setWisdom] = useState(true);
  const [day, setDay] = useState(true);
  const [tormentor, setTormentor] = useState(true);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      let message = "";

      // Bounty 3 min
      if (bounty) {
        if (count % 180 === 0) {
          message += "Bounty \n";
          if (count >= 60) {
            message += "Lotus \n";
          }
          setRune(true);
          setTimeout(() => setRune(false), 5000);
        }
      }

      // Power 2 min
      if (power) {
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
      }

      // Wisdom 7 min
      if (wisdom) {
        if (count % 420 === 0) {
          message += "Wisdom \n";
          setRune(true);
          setTimeout(() => setRune(false), 5000);
        }
      }

      // Day/Night 5 min
      if (wisdom) {
        if (count % 300 === 0) {
          message += "Day / Night \n";
          setRune(true);
          setTimeout(() => setRune(false), 5000);
        }
      }

      // Tormentor 20 min
      if (wisdom) {
        if (count % 1200 === 0) {
          message += "Tormentor \n";
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

  // Handle clicks
  function handleClick(event) {
    console.log(event);

    if (event === "test") {
      setPause((prevVal) => {
        console.log(prevVal);
        return !prevVal;
      });
    }
    if (event === "expand") {
      setExpand((prevState) => {
        return !prevState;
      });
    }

    if (event === "bounty") {
      setBounty((prevState) => {
        return !prevState;
      });
    }

    if (event === "power") {
      setPower((prevState) => {
        return !prevState;
      });
    }

    if (event === "wisdom") {
      setWisdom((prevState) => {
        return !prevState;
      });
    }

    if (event === "day") {
      setDay((prevState) => {
        return !prevState;
      });
    }

    if (event === "tormentor") {
      setTormentor((prevState) => {
        return !prevState;
      });
    }
  }

  return (
    <div className="App">
      <h1 className="title">Dota 2 Timer</h1>
      <Button onClick={() => handleClick("test")}>pause</Button>
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
