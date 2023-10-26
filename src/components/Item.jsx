import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./switchStyle";
import Avatar from "@mui/material/Avatar";

function Item({ handleClick, runeName, runeTime, runeText, id, runes, time }) {
  const [toggle, setToggle] = useState(runes[runeName]);

  function Toggle(event) {
    handleClick(event);
    setToggle(!toggle);
  }

  return (
    <ListItem>
      <ListItemIcon>
        <Avatar alt={`${runeName}`} src={`${runeName}.png`} />
      </ListItemIcon>
      <ListItemText
        className="runeTimeText"
        primary={runeText}
        secondary={`${runeTime} Min`}
      />

      <ThemeProvider theme={theme}>
        <Switch
          key={id}
          id={"runeToggle"}
          name={id}
          value={toggle}
          color="dota"
          edge="end"
          onChange={(event) => Toggle(event)}
          checked={toggle}
        />
      </ThemeProvider>
    </ListItem>
  );
}

export default Item;
