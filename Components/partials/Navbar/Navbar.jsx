import React from "react";
import Logo from "./partials/Logo.jsx";
import SearchBar from "./partials/SearchBar.jsx";
import Auth from "./partials/Auth.jsx";
import NavIcon from "./partials/NavIcon.jsx";
import Language from "./partials/Language.jsx";
import Link from "next/link.js";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container justify-content-between">
          <Logo hatColor={"text-dark"} />

          <SearchBar />

          <ul className="navbar-nav d-flex align-items-center">
            <Language />
            <li className="nav-item me-3 me-lg-4">
              <NavIcon
                icon={"fa-regular fa-heart"}
                badge={1}
                href={"/wishlist"}
                title={"Wishlist"}
              />
            </li>
            <li className="nav-item me-3 me-lg-4">
              <NavIcon
                icon={"fa-brands fa-opencart"}
                badge={1}
                href={"/cart"}
                title={"Cart"}
              />
            </li>
            <li className="nav-item me-0 me-lg-1">
              <Auth />
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar2 navbar-expand-lg navbar-light bg-light p-0">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <NavList href={"/"}>HOM0E</NavList>
              <NavList href={"/about"}>ABOUT</NavList>
              <NavList href={"/shop"}>SHOP</NavList>
              <NavList href={"/contact"}>CONTACT US</NavList>
              <NavList href={"/faq"}>FAQ</NavList>
              <NavList href={"/seller"}>BECOME A SELLER</NavList>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavList = ({ children, href }) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link px-md-3 hvrBB" href={href}>
          {children}
        </Link>
      </li>
    </>
  );
};
export default Navbar;
