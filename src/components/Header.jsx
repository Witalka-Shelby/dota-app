import React from "react";
import { Box, Container } from "@mui/system";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Header({ reminderSeconds, changeReminder }) {
  const [openPopover, setOpenPopover] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    let { id } = event.target;
    // console.log(id);
    if (id === "plus") {
      changeReminder(reminderSeconds + 1);
    }

    if (id === "minus") {
      changeReminder(reminderSeconds - 1);
    }

    if (id === "settings") {
      setOpenPopover(true);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event) => {
    setOpenPopover(false);
    setAnchorEl(null);
  };

  return (
    <Container className="timerContainer">
      <Box key={"headerTitle"}>
        <h1 className="title">Dota 2 Timer</h1>
      </Box>
      <Box onClick={handleClick}>
        <img
          height={30}
          key={"settingsIcon"}
          id={"settings"}
          className="settingsIcon"
          src="settings.png"
          alt="settings"
        />
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
            sx={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#efe1d1",
              width: "200px",
            }}
          >
            <p>Click on Rosh to start timer.</p>
          </Box>
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
            Reminder time
          </Box>
          <ButtonGroup
            key={"buttonGroupe"}
            sx={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#efe1d1",
              width: "200px",
            }}
            className="popover"
            variant="text"
            aria-label="text button group"
          >
            <Button
              key={"minusBtn"}
              sx={{
                color: "#331D2C",
              }}
              id="minus"
              onClick={handleClick}
            >
              -
            </Button>
            <Button
              key={"timeBtn"}
              sx={{
                color: "#331D2C",
              }}
            >
              {reminderSeconds}
            </Button>
            <Button
              key={"plusBtn"}
              sx={{
                color: "#331D2C",
              }}
              id="plus"
              onClick={handleClick}
            >
              +
            </Button>
          </ButtonGroup>
        </Popover>
      </Box>
    </Container>
  );
}
