import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

function Item(props) {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <h3>Icon</h3>
      </ListItemIcon>
      <ListItemText id="switch-list-label-wifi" primary={props.runeName} />
      <Switch
        edge="end"
        onChange={handleToggle("wifi")}
        checked={checked.indexOf("wifi") !== -1}
        inputProps={{
          "aria-labelledby": "switch-list-label-wifi",
        }}
      />
    </ListItem>
  );
}

export default Item;
