import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";

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
          <DialogTitle>{props.textObj.title}</DialogTitle>
          <DialogContentText>
            <Typography paragraph>{props.textObj.message}</Typography>
            <Typography paragraph>{props.textObj.dayAndRosh}</Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
