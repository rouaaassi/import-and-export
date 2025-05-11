import {
  Box,
  Button,
  IconButton,
  Link,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { ForgetPass } from "../../../api/handlers/forget-password";

export default function ForgetPassword() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelforget = async () => {
    try {
      const data = { email };
      const response = await ForgetPass(data);
      console.log("Reset link sent:", response);
      handleClose();
    } catch (error) {
      console.log("Error sending reset link:", error);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box>
      <Link
        onClick={handleOpen}
        component="button"
        variant="body2"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: 8,
          color: "gray",
          fontWeight: 500,
          textDecoration: "none",
          "&:hover": { color: "#1565c0" },
        }}
      >
        Forgot your password?
      </Link>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="forgot-password-title"
        aria-describedby="forgot-password-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "grey.500",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            id="forgot-password-title"
            variant="h6"
            component="h2"
            sx={{ mb: 1 }}
          >
            Reset Your Password
          </Typography>

          <Typography
            id="forgot-password-description"
            variant="body2"
            sx={{ mb: 3, color: "text.secondary" }}
          >
            Enter your email address and we’ll send you a link to reset your password.
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: 1, background: "#0118D8" }}
            onClick={handelforget}
          >
            Send Reset Link
          </Button>

          <Typography
            variant="caption"
            display="block"
            align="center"
            color="text.secondary"
          >
            Or try again later.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
