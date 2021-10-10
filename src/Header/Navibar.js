import {  AppBar, Button, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import CustomerAccount from "./CustomerAccount"
import CustomerLogin from "./CustomerLogin"
import Logo from "../Images/logo.png"
import styles from "./Navibar.module.css"

export default function Navibar() {
  const [value, setValue] = React.useState("one");


// If customer is loged in it will show CustomerAccount else CustomerLogin Button
  const[isLoged, setIsLoged] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <Grid className={styles.navbar} container >
        <Grid item xs={10}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="About Us" />
            <Tab value="two" label="Product" />
            <Tab value="three" label="Package" />
            <Tab value="four" label="Contact Us" />
          </Tabs>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {isLoged ? <CustomerAccount /> : <CustomerLogin />}
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
