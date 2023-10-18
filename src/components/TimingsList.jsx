import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Item from "./Item";
import Collapse from "@mui/material/Collapse";

export default function SwitchListSecondary(props) {
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
      <Collapse orientation="vertical" in={props.expandCard}>
        <Item runeName="Bounty" />
        <Item runeName="Water rune" />
        <Item runeName="Power rune" />
        <Item runeName="Lotus" />
      </Collapse>
    </List>
  );
}
