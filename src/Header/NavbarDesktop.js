import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Button } from "@mui/material";
import logo from "../Images/logo-white.png";





function NavbarDesktop({value,handleChange}) {
  
    return (
      <AppBar position="fixed">
        <Toolbar sx={{zIndex:999}}>
          <div>
            <img style={{ width: 200, padding: 10 }} src={logo} alt="" />
          </div>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={handleChange}
            sx={{ flexGrow: 1, paddingLeft: 20 }}
          >
            <Tab sx={{ minWidth: 200, width: 150 }} label="About Us" />
            <Tab sx={{ minWidth: 200, width: 150 }} label="Products" />
            <Tab sx={{ minWidth: 200, width: 150 }} label="Packages" />
            <Tab sx={{ minWidth: 200, width: 150 }} label="Contact Us" />
          </Tabs>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
}

export default NavbarDesktop
