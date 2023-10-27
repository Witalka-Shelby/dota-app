import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Popover from "@mui/material/Popover";

function Timer({ time }) {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);
  const [roshInfo, setRoshInfo] = useState();

  function roshTimer(event) {
    console.log(event);
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setRoshInfo("8 min since Rosh kill he spawns soon");
      setOpenPopover(true);

      setTimeout(() => {
        setOpenPopover(false);
      }, 10000);
    }, 480000);

    setTimeout(() => {
      setRoshInfo("11 min since Rosh kill he spawned");
      setOpenPopover(true);

      setTimeout(() => {
        setOpenPopover(false);
      }, 10000);
    }, 660000);
  }

  function roshText(event) {
    setRoshInfo("Click Rosh to set the respawn timer.");
    setAnchorEl(event.currentTarget);
    setOpenPopover(true);
    setTimeout(() => {
      setOpenPopover(false);
    }, 3000);
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
      <Box>
        <h2 className="timer">{time < 0 ? time : `${min}:${sec}`}</h2>
      </Box>
      <Box>
        <img
          onClick={roshTimer}
          id="roshBtn"
          className="rosh"
          height={60}
          src="rosh.png"
          alt="rosh"
        ></img>
      </Box>

      <Popover
        key={"popover"}
        open={openPopover}
        onMouseOut={handleClose}
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
          {roshInfo}
        </Box>
      </Popover>
    </Box>
  );
}

export default Timer;
