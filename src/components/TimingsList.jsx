import React from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Item from "./Item";

export default function SwitchListSecondary() {
  return (
    <List
      sx={{ width: "100%", maxWidth: "100%" }}
      subheader={<ListSubheader>Timings</ListSubheader>}
    >
      <Item />
      <Item />
      <Item />
      <Item />
    </List>
  );
}
