import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import logo from "../../../Images/logo.png";
import MuiButton from "../../../StyledComponents/MuiButton";

const Navigation = () => {
  return (
    <MuiNavbar background="#FFF8F5" navItemPosition="right" logo={logo}>
      <NavItem to="/home" color="#2d3436">
        Home
      </NavItem>
      <NavItem to="/about" color="#2d3436">
        Our Services
      </NavItem>
      <NavItem to="/contact" color="#2d3436">
        Contact Us
      </NavItem>
      <NavItem to="/Login" color="#2d3436">
        <MuiButton sx={{ px: 4, py: 1 }}>Login</MuiButton>
      </NavItem>
    </MuiNavbar>
  );
};

export default Navigation;
