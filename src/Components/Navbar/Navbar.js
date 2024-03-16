import React, { useState, useContext } from "react";
import DropDownMenu from "./DropDownMenu";
import "../../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import CompanyDropDownMenu from "./CompanyDropDownMenu";
import { Sling as Hamburger } from "hamburger-react";

function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);
  //   var toggleMenu = () => {
  //     setIsOpen((open) => !open);
  //   };
  const [dropDown, setDropDown] = useState({
    features: false,
    company: false,
  });
  //   const [dropDown, setDropdown] = useState(false);
  //   const handleMouseEnter = () => {
  //     // setDropdownVisible(true);
  //   };

  //   const handleMouseLeave = () => {
  //     // setDropdownVisible(false);
  //   };
  const navigationLinks = [
    {
      path: "/Features",
      text: " Features ",
      arrowUp: (
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      ),
      arrowDown: (
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      ),
      className: "nav-item",
    },
    {
      path: "/Company",
      text: " Company ",
      arrowUp: (
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      ),
      arrowDown: (
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            stroke-width="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      ),
      className: "nav-item",
    },
    { path: "/Careers", text: " Careers ", className: "nav-item" },
    { path: "/About", text: " About ", className: "nav-item" },
  ];
  const navigationLinksLogin = [
    { path: "/Login", text: " Login " },
    { path: "/Register", text: " Register " },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="Navbar">
        <div className="snap">
          <div className="aligning">
            <h1 style={{ fontSize: "40px" }}>snap</h1>
            <div className="hamburger">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {/* <div className="hamburger" onClick={toggleMenu}>
              {" "}
              <svg xmlns="http://www.w3.org/2000 /svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div> */}
          </div>
          {/* <h1 style={{ fontSize: "40px" }}>snap</h1>
          <div className="hamburger" onClick={toggleMenu}>
            {" "}
            <svg xmlns="http://www.w3.org/2000 /svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div> */}
          <ul className={`snap-ul ${isOpen ? "is-open" : ""}`}>
            {navigationLinks.map((link) => {
              if (link.path === "/Features") {
                return (
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <li
                      key={link.path}
                      className="nav-menu"
                      onMouseEnter={() => {
                        setDropDown((prev) => {
                          return { ...prev, features: true };
                        });
                      }}
                      onMouseLeave={() => {
                        setDropDown((prev) => {
                          return { ...prev, features: false };
                        });
                      }}
                    >
                      <Link
                        to={link.path}
                        className="snap-nav-link hover-stuff"
                        style={{
                          textDecoration: "none",
                          //   height: "100%",
                          //   display: "flex",
                          //   alignItems: "center",
                          //   justifyContent: "center",
                        }}
                      >
                        {link.text}
                      </Link>
                      {link.arrowUp}
                      {/* {dropDown && <DropDownMenu />} */}
                    </li>
                    {dropDown.features && <DropDownMenu />}
                    {/* {<DropDownMenu />} */}
                  </div>
                );
              } else if (link.path === "/Company") {
                return (
                  <div style={{ position: "relative" }}>
                    <li
                      key={link.path}
                      className="nav-menu"
                      onMouseEnter={() => {
                        setDropDown((prev) => {
                          return { ...prev, company: true };
                        });
                      }}
                      onMouseLeave={() => {
                        setDropDown((prev) => {
                          return { ...prev, company: false };
                        });
                      }}
                    >
                      <Link
                        to={link.path}
                        className="snap-nav-link hover-stuff"
                        style={{ textDecoration: "none" }}
                      >
                        {link.text}
                      </Link>
                      {link.arrowUp}
                    </li>
                    {dropDown.company && <CompanyDropDownMenu />}
                  </div>
                );
              }
              return (
                <div>
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="snap-nav-link hover-stuff nav-menu"
                      style={{ textDecoration: "none" }}
                    >
                      {link.text}
                    </Link>
                    {/* {link.arrow && link.arrow} */}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="login">
          <ul className={`login-ul ${isOpen ? "is-open" : ""}`}>
            {navigationLinksLogin.map((log) => {
              if (log.path === "/Register") {
                return (
                  <li
                    key={log.path}
                    className="nav-menu register hover-stuff"
                    style={{ textDecoration: "none" }}
                  >
                    <Link
                      to={log.path}
                      className="hover-stuff"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {log.text}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={log.path} className="nav-menu">
                    <Link
                      to={log.path}
                      className="hover-stuff "
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      {log.text}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
          {/* <div className="hamburger" onClick={toggleMenu}>
            {" "}
            <svg xmlns="http://www.w3.org/2000 /svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div> */}
        </div>
      </nav>
      {/* <DropDownMenu /> */}
      {/* <CompanyDropDownMenu /> */}
      {/* {dropDown && <DropDownMenu />} */}
    </>
  );
}

export default Navbar;
