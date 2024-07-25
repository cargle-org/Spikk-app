import React from "react";
import logo from "../assets/SVG/Logo.svg";
import arrdwn from "../assets/SVG/ArrowDown.svg";
import { NavLink, Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { StyledHeader } from "../atoms/StyledHeader/index.styled";
import { StyledButtonLinks } from "../atoms/StyledButtons/index.styled";

function Header(props) {
  const goToBuy = () => {
    const Buy = document.getElementById("buy-btn").offsetTop;
    window.scrollTo({
      top: Buy,
      left: 0,
      behavior: "smooth",
    });
  };
  const goToAbout = () => {
    const About = document.getElementById("about").offsetTop;
    window.scrollTo({
      top: About,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader>
      <Link to="/" className="logo-group">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header-links">
        <div className="navigation">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="#about" onClick={goToAbout}>
            About
          </NavLink>
          <StyledButtonLinks className="header-btn" onClick={goToBuy}>
            <Link to="/#about">
              {" "}
              Get Started <img src={arrdwn} alt="icon" />
            </Link>
          </StyledButtonLinks>
        </div>
      </div>
      <div className="menu-group">
        <IconButton onClick={props.onClick} icon={<HamburgerIcon />} />
      </div>
    </StyledHeader>
  );
}

export default Header;
