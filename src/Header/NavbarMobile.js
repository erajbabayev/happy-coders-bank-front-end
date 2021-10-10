import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Button, Grid } from "@mui/material";
import logo from "../Images/logo-m.png";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mobilem: {
      marginTop:"30px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

function NavbarMobile({ value, handleChange }) {
  const classes = useStyles();
  const [handleMenu, setHandleMenu] = useState(false);
  return (
    <AppBar>
      <Grid container >
        <Grid item xs={11}>
          <div >
            <img src={logo} alt="" />
          </div>
        </Grid>
        <Grid item xs={1}>
          <MenuIcon 
          className={classes.mobilem}
          sx={{fontSize:60}} 
          onClick={() => setHandleMenu(!handleMenu)} />
          {handleMenu && (
            <Tabs
              orientation="horizontal"
              indicatorColor="secondary"
              textColor="white"
              value={value}
              onChange={handleChange}
              flexContainerVertical
            >
              <Tab fullWidth label="About Us" />
              <Tab fullWidth label="Products" />
              <Tab fullWidth label="Packages" />
              <Tab fullWidth label="Contact Us" />
              <Button color="inherit">Login</Button>
            </Tabs>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default NavbarMobile;
