import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogSlide({ runeTrigger, text, changeRune }) {
  // function handleClickOpen() {
  //   setOpen(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 5000);
  // }

  function turnAlertOff() {
    setTimeout(changeRune(false), 5000);
  }

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (true) {
  //       console.log("bounty");
  //       setOpen(true);
  //       setTimeout(() => {
  //         setOpen(false);
  //       }, 5000);
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <Dialog
        open={runeTrigger}
        onLoad={turnAlertOff}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
      </Dialog>
    </div>
  );
}
