import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Card from "./components/Card";

function App() {
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(0);
  const [msgActive, setMsgActive] = useState(false);
  let [runeMessage, setRuneMessage] = useState("");
  const [pause, setPause] = useState(false);
  const [remind, setRemind] = useState(15);

  // Runes
  const [runes, setRunes] = useState({
    bounty: true,
    power: true,
    wisdom: true,
    day: true,
    tormentor: true,
  });

  async function getAPITime() {
    const response = await fetch("/dotaapi");
    const api = await response.json();
    return api.time;
  }

  useEffect(() => {
    //Implementing the setInterval method
    // let vitaTEST = getAPITime().then((data) => setCount(data));

    const interval = setInterval(() => {
      let message = "";

      // Bounty 3 min
      if (runes.bounty) {
        if ((count + 15) % 180 === 0) {
          message += "Bounty \n";
          if (count >= 60) {
            message += "Lotus \n";
          }
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
        }
      }

      // Power 2 min
      if (runes.power) {
        if ((count + 15) % 120 === 0 && count > 60) {
          if (count > 60) {
            if (count < 300) {
              message += "Water \n";
            } else {
              message += "Power \n";
            }
            setMsgActive(true);
            setTimeout(() => setMsgActive(false), 5000);
          }
        }
      }

      // Wisdom 7 min
      if (runes.wisdom) {
        if ((count + 15) % 420 === 0 && count > 60) {
          message += "Wisdom \n";
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
        }
      }

      // Day/Night 5 min
      if (runes.day) {
        if ((count + 15) % 300 === 0 && count > 60) {
          message += "Day / Rosh South \n";
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
        }
      } else {
        message += "Day / Rosh South \n";
      }

      // Tormentor 20 min
      if (runes.tormentor) {
        if ((count + 15) % 1200 === 0 && count > 60) {
          message += "Tormentor \n";
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
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
  }, [count, msgActive]);

  // Handle clicks
  function handleClick(event) {
    const { id, name, checked } = event.target;
    //console.log(name, value);
    console.log(checked);

    if (id === "test") {
      setPause((prevVal) => {
        console.log(prevVal);
        return !prevVal;
      });
    }
    if (id === "timingsToggle") {
      setExpand((prevState) => {
        return !prevState;
      });
    }

    if (id === "runeToggle") {
      setRunes((prevVal) => {
        return { ...prevVal, [name]: checked };
      });
    }
  }

  return (
    <div className="App">
      <h1 className="title">Dota 2 Timer</h1>
      <Button id="test" onClick={(event) => handleClick(event)}>
        pause
      </Button>
      <Card
        expand={expand}
        handleClick={handleClick}
        msgActive={msgActive}
        runes={runes}
        runeMessage={runeMessage}
        count={count}
      />
    </div>
  );
}

export default App;
