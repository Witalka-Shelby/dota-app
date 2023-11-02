import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AlertDialogSlide(props) {
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
          {props.textObj.message.map((msg) => {
            return (
              <DialogContentText
                key={msg}
                sx={{
                  fontSize: 30,
                  color: "331D2C",
                }}
              >
                {msg}
              </DialogContentText>
            );
          })}

          <DialogContentText>{props.textObj.dayAndRosh}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
