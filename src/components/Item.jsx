import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

function Item(props) {
  const [checked, setChecked] = React.useState([`${props.runeName}`]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    props.toggleRune(value);
    setChecked(newChecked);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <h3>Icon</h3>
      </ListItemIcon>
      <ListItemText
        id={props.id}
        className="runeTimeText"
        primary={props.runeText}
        secondary={`${props.runeTime} Min`}
      />
      <Switch
        edge="end"
        onChange={handleToggle(props.runeName)}
        checked={checked.indexOf(props.runeName) !== -1}
        inputProps={{
          "aria-labelledby": `switch-list-label-${props.runeName}`,
        }}
      />
    </ListItem>
  );
}

export default Item;
