import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Item from "./Item";
import Collapse from "@mui/material/Collapse";
import runeTimes from "../runeTimes";
import RuneAlert from "./RuneAlert";
import Button from "@mui/material/Button";

export default function SwitchListSecondary(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  return (
    <List
      sx={{ width: "100%", maxWidth: "100%" }}
      subheader={
        <ListSubheader
          onClick={() => {
            props.toggleCard();
          }}
          style={{ backgroundColor: "#A78295" }}
          color="inherit"
        >
          {props.expandCard ? "Timings" : "Open Timings"}
        </ListSubheader>
      }
    >
      <Collapse timeout="auto" in={props.expandCard}>
        {runeTimes.map((rune, index) => {
          if (rune.time * 60 === props.time + 15) {
            handleClickOpen();
          }
          return (
            <div>
              <RuneAlert state={open} text={rune.name} />
              <Item
                key={index}
                id={index}
                runeName={rune.name}
                runeTime={rune.time}
              />
            </div>
          );
        })}
        <Button onClick={handleClickOpen}>Test</Button>
      </Collapse>
    </List>
  );
}
