import React, { useState, useContext } from "react";
import DropDownMenu from "./DropDownMenu";
import "../../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const navigationLinks = [
    {
      path: "/Features",
      text: " Features ",
      icon: (
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
          <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4" style={{display:'none'}}/>
        </svg>
        
      ),
    },
    {
      path: "/Company",
      text: " Company ",
      icon: (
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      ),
    },
    { path: "/Careers", text: " Careers " },
    { path: "/About", text: " About " },
  ];
  const navigationLinksLogin = [
    { path: "/Login", text: " Login " },
    { path: "/Register", text: " Register " },
  ];

  return (
    <nav className="Navbar">
      <div className="snap">
        <h1 style={{ fontSize: "40px" }}>snap</h1>
        <ul className="snap-ul">
          {navigationLinks.map((link) => (
            <li key={link.path} className="nav-menu">
              <Link
                to={link.path}
                className="snap-nav-link hover-stuff"
                style={{ textDecoration: "none" }}
              >
                {link.text}
              </Link>
              {link.icon && link.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="login">
        <ul className="login-ul">
          {navigationLinksLogin.map((log) => (
            <li
              key={log.path}
              className="nav-menu register hover-stuff"
              style={{ textDecoration: "none" }}
            >
              {log.path === "/Register" ? (
                <Link
                  to={log.path}
                  className="hover-stuff"
                  style={{
                    textDecoration: "none",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {log.text}
                  {isDropdownVisible && <DropDownMenu />}
                </Link>
              ) : (
                <Link
                  to={log.path}
                  className="hover-stuff"
                  style={{ textDecoration: "none" }}
                >
                  {log.text}
                </Link>
              )}{" "}
            </li>
          ))}
        </ul>
        <div className="hamburger">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
