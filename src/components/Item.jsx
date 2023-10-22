import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

function Item({ handleClick, runeName, runeTime, runeText, id, runes }) {
  const [toggle, setToggle] = useState(runes[runeName]);
  function Toggle(event) {
    handleClick(event);
    setToggle(!toggle);
  }
  return (
    <ListItem>
      <ListItemIcon>
        <h3>Icon</h3>
      </ListItemIcon>
      <ListItemText
        className="runeTimeText"
        primary={runeText}
        secondary={`${runeTime} Min`}
      />
      <Switch
        id={"runeToggle"}
        name={id}
        value={toggle}
        edge="end"
        onChange={(event) => Toggle(event)}
        checked={toggle}
      />
    </ListItem>
  );
}

export default Item;
