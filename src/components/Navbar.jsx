import logo from "./../img/amikom.png";
import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom amikom-color">
      <a
        href="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <img src={logo} alt="" height={33} />
        <span className="fs-4 ms-1 text-uppercase">Amikom</span>
      </a>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-5">
        {navigation.map((item) => (
          <NavLink
            key={item.title}
            to={item.href}
            className="me-3 py-2 text-dark text-decoration-none"
          >
            <span
              className={({ isActive }) => {
                return "py-2" + isActive ? "active" : "";
                // console.log(item.href, isActive);
              }}
            >
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <NavLink to="/login" className="me-3 py-2 text-decoration-none">
          LOGIN
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
