import React from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";
function Notification({ error, success, isOpen, onClose }) {
  const severity = error ? "error" : "success";
  const message = error || success;

  return message ? (
    <Snackbar
      open={isOpen}
      autoHideDuration={1500}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  ) : null;
}

Notification.propTypes = {
  error: PropTypes.string,
  success: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
