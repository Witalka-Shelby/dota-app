import { useState, useEffect } from "react";

function Timer({ time }) {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setMin(() => {
      let minTemp = Math.floor(time / 60);
      if (minTemp < 10) {
        minTemp = "0" + minTemp;
      }
      return minTemp;
    });
    setSec(() => {
      let secTemp = time - min * 60;
      if (secTemp < 10) {
        secTemp = "0" + secTemp;
      }
      return secTemp;
    });
  }, [min, sec, time]);

  return <h2 className="timer">{time < 0 ? time : `${min}:${sec}`}</h2>;
}

export default Timer;
