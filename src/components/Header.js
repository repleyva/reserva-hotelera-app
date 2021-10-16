import { AppBar, InputBase, Toolbar } from "@mui/material";
import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const displayMobile = () => {};
  const displayDesktop = () => {
    return (
      <Toolbar className="tool-bar">
        <img src="assets/logo.png" alt="logo" className="logo-header" />
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
    );
  };
  return (
    <AppBar className="app-bar">
      {mobile ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default Header;
