import React from "react";
import { Box, Container } from "@mui/system";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Header({ reminderSeconds, changeReminder }) {
  const [openPopover, setOpenPopover] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(event);
    let { id } = event.target;
    console.log(id);
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
      <Box>
        <h1 className="title">Dota 2 Timer</h1>
      </Box>
      <Box>
        <SettingsApplicationsIcon
          id={"settings"}
          className="settingsIcon"
          onClick={handleClick}
        ></SettingsApplicationsIcon>
        <Popover
          sx={{
            border: "1px",
            borderColor: "#331D2C",
          }}
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
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#efe1d1",
              width: "300px",
            }}
          >
            Reminder time
          </Box>
          <ButtonGroup
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#efe1d1",
              width: "300px",
            }}
            className="popover"
            variant="text"
            aria-label="text button group"
          >
            <Button
              sx={{
                color: "#331D2C",
              }}
              id="minus"
              onClick={handleClick}
            >
              -
            </Button>
            <Button
              sx={{
                color: "#331D2C",
              }}
            >
              {reminderSeconds}
            </Button>
            <Button
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
