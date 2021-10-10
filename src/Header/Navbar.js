import { AppBar, Tabs, Tab, Toolbar, Button } from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles"
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


const useStyles = makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const classes = useStyles();

  return (
    <div>
      <div className={classes.desktop}>
        <NavbarDesktop value={value} handleChange={handleChange} />
      </div>
      <div className={classes.mobile}>
        <NavbarMobile value={value} handleChange={handleChange} classes = {classes}/>
      </div>
    </div>
  );
}
