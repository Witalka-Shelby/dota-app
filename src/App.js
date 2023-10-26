import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(-20);
  const [msgActive, setMsgActive] = useState(false);
  const [remind, setRemind] = useState(15);
  const [runeMessage, setRuneMessage] = useState({
    title: `In ${remind} seconds`,
    message: "",
    dayAndRosh: "Day and Rosh is Bot",
  });
  const [pause, setPause] = useState(false);

  const [timeOfDay, setTimeOfDay] = useState(true);

  // Runes
  const [runes, setRunes] = useState({
    bounty: true,
    power: true,
    wisdom: true,
    day: true,
    tormentor: true,
    neutrals: true,
  });

  useEffect(() => {
    //Implementing the setInterval method
    const fetchData = async () => {
      const response = await fetch("/dotaapi");
      const api = await response.json();
      setCount(api.time);
    };

    const interval = setInterval(() => {
      let message = "";

      // Bounty 3 min
      if (runes.bounty) {
        if ((count + remind) % 180 === 0) {
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
        if ((count + remind) % 120 === 0 && count > 60) {
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
        if ((count + remind) % 420 === 0 && count > 60) {
          message += "Wisdom \n";
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
        }
      }

      // Day/Night 5 min
      if (runes.day) {
        if (timeOfDay) {
          if ((count + remind) % 300 === 0 && count > 60) {
            setRuneMessage((prevMsg) => {
              return { ...prevMsg, dayAndRosh: "Night and Rosh is Top" };
            });
            setTimeOfDay(false);
            setMsgActive(true);
            setTimeout(() => setMsgActive(false), 5000);
          }
        } else {
          if ((count + remind) % 300 === 0 && count > 60) {
            setRuneMessage((prevMsg) => {
              return { ...prevMsg, dayAndRosh: "Day and Rosh is Bot" };
            });
            setTimeOfDay(true);
            setMsgActive(true);
            setTimeout(() => setMsgActive(false), 5000);
          }
        }
      }

      // Tormentor 20 min
      if (runes.tormentor) {
        if ((count + remind) % 1200 === 0 && count > 60) {
          message += "Tormentor \n";
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
        }
      }

      if (runes.neutrals) {
        if ((count + remind) % 420 === 0 && count > 60) {
          message += "Neutrals \n";
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
        }
      }

      if (message !== "") {
        setRuneMessage((prevMsg) => {
          return { ...prevMsg, message: message };
        });
      }

      // // call the function
      // fetchData()
      //   // make sure to catch any error
      //   .catch(console.error);

      // if (!pause) {
      //   setCount(count + 1);
      // }
    }, 1000);

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
      <Header reminderSeconds={remind} changeReminder={setRemind} />
      {/* <Button id="test" onClick={(event) => handleClick(event)}>
        pause
      </Button> */}
      <Card
        remind={remind}
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
