import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function BasicHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <a href="/">My Job Portal</a>
        </Typography>

        <Button color="inherit" href="/login">
          Login
        </Button>
        <Button color="inherit" href="/registration">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
