import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Item from "./Item";
import Collapse from "@mui/material/Collapse";
import runeTimes from "../runeTimes";

export default function SwitchListSecondary({ expandCard, toggleCard }) {
  return (
    <List
      key={"runeTimingsList"}
      className="timings"
      sx={{ width: "100%", maxWidth: "100%" }}
      subheader={
        <ListSubheader
          key={"runeTimingsListHeader"}
          onClick={() => {
            toggleCard();
          }}
          style={{ backgroundColor: "#A78295" }}
          color="inherit"
        >
          {expandCard ? "Timings" : "Open Timings"}
        </ListSubheader>
      }
    >
      <Collapse key={"runeTimingsListCollapse"} timeout="auto" in={expandCard}>
        {runeTimes.map((rune, index) => {
          return (
            <div>
              <Item
                key={index}
                id={index}
                runeName={rune.name}
                runeTime={rune.time}
              />
            </div>
          );
        })}
      </Collapse>
    </List>
  );
}
