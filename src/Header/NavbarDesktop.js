import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Button } from "@mui/material";
import logo from "../Images/logo-white.png";





function NavbarDesktop({value,handleChange}) {
  
    return (
      <AppBar position="fixed" >
        <Toolbar>
          <div>
            <img style={{width:200, padding:10}} src={logo} alt="" />
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
          </Tabs>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
}

export default NavbarDesktop
