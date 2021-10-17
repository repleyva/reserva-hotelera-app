import {
  AppBar,
  Button,
  ButtonBase,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const menuList = ["My Account", "Previous bookings", "Logout"];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const getDrawerChoices = () => {
    return menuList.map((data) => {
      return (
        <ButtonBase className="menu-list-button">
          <List className="menu-list">
            <ListItem className="menu-item">{data}</ListItem>
          </List>
        </ButtonBase>
      );
    });
  };
  return (
    <AppBar className="app-bar">
      <Toolbar className="tool-bar">
        <IconButton {...{ onClick: handleDrawerOpen }} className="menu-button">
          <MenuIcon className="menu-icon" />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="menu-drawer">{getDrawerChoices()}</div>
        </Drawer>
        <Link to="/" className="link-logo">
          <img src="assets/logo.png" alt="logo" className="logo-header" />
        </Link>
        <nav className="search-nav">
          <InputBase
            fullWidth
            placeholder="Search here..."
            inputProps={{ className: "input-search" }}
          />
          <SearchIcon className="search-icon" />
        </nav>
        <div className="container-login">
          <h3>Sign Up</h3>
          <AccountCircleIcon className="profile-icon" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
