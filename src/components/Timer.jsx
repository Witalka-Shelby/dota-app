import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Popover from "@mui/material/Popover";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function Timer({ time }) {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);

  function roshTimer(event) {
    setTimeout(() => {
      // alert("rosh 8 min");
    }, 5000);

    setTimeout(() => {
      // alert("rosh 11 min");
    }, 10000);
  }

  function roshText(event) {
    setAnchorEl(event.currentTarget);
    setOpenPopover(true);
  }

  const handleClose = (event) => {
    setOpenPopover(false);
    setAnchorEl(null);
  };

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

  return (
    <Box className="timerBox">
      <h2 className="timer">{time < 0 ? time : `${min}:${sec}`}</h2>
      <img
        onMouseOver={roshText}
        onClick={roshTimer}
        id="roshBtn"
        className="rosh"
        height={60}
        src="rosh.png"
        alt="rosh"
      ></img>
      <Popover
        key={"popover"}
        open={openPopover}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box
          key={"reminderTime"}
          sx={{
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#efe1d1",
            width: "200px",
          }}
        >
          Click Rosh to set the respawn timer.
        </Box>
      </Popover>
    </Box>
  );
}

export default Timer;
