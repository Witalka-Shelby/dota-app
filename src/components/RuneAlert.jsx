import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogSlide(props) {
  return (
    <div>
      <Dialog
        open={props.state}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.text}</DialogTitle>
      </Dialog>
    </div>
  );
}
