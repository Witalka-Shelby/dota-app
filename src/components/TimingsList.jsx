import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Item from "./Item";
import Collapse from "@mui/material/Collapse";
import runeTimes from "../runeTimes";

export default function SwitchListSecondary({
  expandCard,
  handleClick,
  runes,
}) {
  return (
    <List
      key={"runeTimingsList"}
      className="timings"
      sx={{ width: "100%", maxWidth: "100%" }}
      subheader={
        <ListSubheader
          className="timingsHeader"
          id={"timingsToggle"}
          style={{
            backgroundColor: "#A78295",
            borderBottomLeftRadius: !expandCard ? "9px" : "0px",
            borderBottomRightRadius: !expandCard ? "9px" : "0px",
          }}
          key={"runeTimingsListHeader"}
          onClick={(event) => {
            handleClick(event);
          }}
          color="inherit"
        >
          {expandCard ? "Timings" : "Show Timings"}
        </ListSubheader>
      }
    >
      <Collapse key={"runeTimingsListCollapse"} timeout="auto" in={expandCard}>
        {runeTimes.map((rune, index) => {
          return (
            <div>
              <Item
                className={rune.name}
                key={index}
                id={rune.name}
                runes={runes}
                runeName={rune.name}
                runeText={rune.text}
                runeTime={rune.time}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </Collapse>
    </List>
  );
}
