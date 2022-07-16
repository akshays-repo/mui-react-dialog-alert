// eslint-disable-next-line no-unused-vars
import React, { FunctionComponent } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useConfirmationStore } from "./confirmAlertHook";

export const AlertDialog: FunctionComponent = () => {
  const {
    show,
    cancelLabel,
    handleClose,
    onConfirmation,
    onCancel,
    title,
    subtitle,
    confirmLabel,
  } = useConfirmationStore();

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {subtitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            if (onCancel) onCancel();
            if (handleClose) handleClose();
          }}
        >
          {cancelLabel}
        </Button>
        <Button
          onClick={() => {
            onConfirmation();
            handleClose();
          }}
          autoFocus
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
