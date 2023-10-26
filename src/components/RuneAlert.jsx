import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AlertDialogSlide(props) {
  // console.log(props.textObj);
  return (
    <div>
      <Dialog
        open={props.runeTrigger}
        // open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="timerDialog">
          <DialogTitle>In {props.remind} seconds</DialogTitle>
          <DialogContentText>{props.textObj.message}</DialogContentText>
          <DialogContentText>{props.textObj.dayAndRosh}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
