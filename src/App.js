import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
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
  const [neutralsCount, setNeutralsCount] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState(true);

  const neutralsTimeList = useRef([420, 1020, 1620, 2200, 3600]);

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
    // const fetchData = async () => {
    //   const response = await fetch("/dotaapi");
    //   const api = await response.json();
    //   setCount(api.time);
    // };

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
        if ((count + remind) % 300 === 0 && count > 60) {
          let tempDayNightMsg = "Night and Rosh is Top";
          if (!timeOfDay) {
            tempDayNightMsg = "Day and Rosh is Bot";
          }
          setRuneMessage((prevMsg) => {
            return { ...prevMsg, dayAndRosh: tempDayNightMsg };
          });
          setTimeOfDay(false);
          setMsgActive(true);
          setTimeout(() => setMsgActive(false), 5000);
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
        if (
          (count + remind) % neutralsTimeList.current[neutralsCount] === 0 &&
          count > 60
        ) {
          message += `Neutrals Tier ${neutralsCount + 1} \n`;
          setMsgActive(true);
          setNeutralsCount(neutralsCount + 1);
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

      if (!pause) {
        setCount(count + 1);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count, msgActive]);

  // Handle clicks
  function handleClick(event) {
    const { id, name, checked, type } = event.target;
    // console.log(type);

    if (id === "test") {
      setPause((prevVal) => {
        // console.log(prevVal);
        return !prevVal;
      });
    }
    if (id === "timingsToggle") {
      setExpand((prevState) => {
        return !prevState;
      });
    }

    if (type === "checkbox") {
      // console.log(name, checked);
      setRunes((prevVal) => {
        return { ...prevVal, [name]: checked };
      });
    }
  }

  return (
    <div className="App">
      <Header
        key={"header"}
        reminderSeconds={remind}
        changeReminder={setRemind}
      />
      {/* <Button id="test" onClick={(event) => handleClick(event)}>
        pause
      </Button> */}
      <Card
        key={"mainCard"}
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
