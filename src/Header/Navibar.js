import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import logo from "../Images/logo-white.png";

export default function ButtonAppBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div>
          <img src={logo} alt="" />
        </div>
        <Tabs
          indicatorColor="secondary"
          textColor="white"
          value={value}
          onChange={handleChange}
          sx={{ flexGrow: 1, paddingLeft: 20 }}
        >
          <Tab label="About Us" />
          <Tab label="Products" />
          <Tab label="Packages" />
          <Tab label="Contact Us" />
        </Tabs>{" "}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
