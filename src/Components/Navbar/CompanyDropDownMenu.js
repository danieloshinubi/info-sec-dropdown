import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/CompanyDropDownMenu.css";

const CompanyDropDownMenu = () => {
  const CompanySubmenu = [
    { path: "/History", text: "History", className: "submenu-item" },
    { path: "/OurTeam", text: "Our Team", className: "submenu-item" },
    { path: "/Blog", text: "Blog", className: "submenu-item" },
  ];

  const [dropdown, setDropDown] = useState(false);
  return (
    <div className="CompanyDropDownMenu">
      <ul className={dropdown ? "CompanySubMenu clicked":"CompanySubMenu"} onClick={()=> setDropDown(!dropdown)}>
        {CompanySubmenu.map((item) => {
          return (
            <li key={item.path} className={item.className}>
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "16px",
                }}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyDropDownMenu;
