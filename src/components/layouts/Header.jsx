import React, { useState } from "react";
import "../../styles/HeaderStyle.css";
import Logo from "../../assets/images/logo.svg";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handledrawerToggole = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer:
  const menuDrawer = (
    <Box onClick={handledrawerToggole} sx={{ textAlign: "center" }}>
      <Typography
        color="goldenrod"
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1 }}
      >
        <RestaurantIcon />
        MY RESTAURANT
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>{" "}
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>{" "}
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              aria-label="open drawer"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handledrawerToggole}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="Logo" height={"70"} width={"250"} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box>
          <Drawer
            open={mobileOpen}
            onClose={handledrawerToggole}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .Muidrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {menuDrawer}
          </Drawer>
        </Box>
        <Box>
          {" "}
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
