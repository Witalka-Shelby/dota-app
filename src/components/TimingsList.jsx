import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Item from "./Item";
import Collapse from "@mui/material/Collapse";
import runeTimes from "../runeTimes";

export default function TimingsList({ expandCard, handleClick, runes, time }) {
  return (
    <List
      key={"runeTimingsList"}
      className="timings"
      sx={{ width: "100%", maxWidth: "100%" }}
      subheader={
        <ListSubheader
          key={"runeTimingsListHeader"}
          className="timingsHeader"
          id={"timingsToggle"}
          style={{
            backgroundColor: "#A78295",
            borderBottomLeftRadius: !expandCard ? "9px" : "0px",
            borderBottomRightRadius: !expandCard ? "9px" : "0px",
          }}
          onClick={(event) => {
            handleClick(event);
          }}
          color="inherit"
        >
          {expandCard ? "Timings" : "Show Timings"}
        </ListSubheader>
      }
    >
      <Collapse key={"runeTimingsListCollapse"} timeout={0} in={expandCard}>
        {runeTimes.map((rune) => {
          return (
            <div>
              <Item
                time={time}
                className={rune.name}
                key={rune.name}
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
