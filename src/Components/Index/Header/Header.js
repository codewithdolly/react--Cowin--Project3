import React, { useState } from "react";
import "../Index.scss";
import "./Header.scss";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import Logo from "../../Images/logo.png";
import GetMethod from "../../AccessFromAPI/GetMethod/GetMethod";
import Home from "../Home/Home";

const Header = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BrowserRouter>
        <div className="header">
          <div>
            <Link to="/">
              <img src={Logo} alt="Covin logo" />
            </Link>
          </div>
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="white"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              <Link to="/api" className="navbar">
                <Tab value="one" label="API integration" />
              </Link>

              <Link to="/" className="navbar">
                <Tab value="two" label="VACCINATION SERVICES" />
              </Link>
              <Link to="/" className="navbar">
                <Tab value="three" label="RESOURCES" />
              </Link>
              <Link to="/" className="navbar">
                <Tab value="four" label="SUPPORT" />
              </Link>
              <Link to="/" className="navbar">
                <Tab value="five" label="PLATFORMS" />
              </Link>
            </Tabs>
          </div>
          <div>
            <Link to="/" id="signIn">
              {" "}
              <Button variant="outlined">Register / Sign In</Button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<GetMethod />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Header;
