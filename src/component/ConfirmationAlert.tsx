// eslint-disable-next-line no-unused-vars
import React, { FunctionComponent } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useConfirmationStore } from '../hook/confirmAlertHook'

export const AlertDialog: FunctionComponent = () => {
  const {
    show,
    buttonCancelLabel,
    handleClose,
    onConfirmation,
    onCancel,
    title,
    subtitle,
    buttonConfirmLabel
  } = useConfirmationStore()

  const handleClickButton = () => {
    onCancel()
    handleClose()
  }

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {subtitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickButton}>{buttonCancelLabel}</Button>
        <Button
          onClick={() => {
            onConfirmation()
            handleClose()
          }}
          autoFocus
        >
          {buttonConfirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
