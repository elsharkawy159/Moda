import React, { useState, useEffect } from "react";
import Logo from "./partials/Logo.jsx";
import SearchBar from "./partials/SearchBar.jsx";
import NavIcon from "./partials/NavIcon.jsx";
import Language from "./partials/Language.jsx";
import Link from "next/link.js";
import { useAuth } from "../../../Context/AuthContext.js";
import SignIn from "./partials/SignIn.jsx";
import Profile from "./partials/Profile.jsx";
import { useCart } from "../../../Context/CartContext.js";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const { cartData } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`main_nav navbar navbar-expand-lg navbar-light bg-light border-bottom ${
          isScrolled ? "scrolled active" : ""
        }`}
      >
        <div className="container justify-content-between">
          <Logo hatColor={"text-dark"} />

          <SearchBar />

          <ul className="headerIcons navbar-nav d-flex align-items-center">
            <Language />
            {isLoggedIn && (
              <>
                <li className="nav-item me-3 me-lg-4">
                  <NavIcon
                    icon={"fa-regular fa-heart"}
                    badge={0}
                    href={"/wishlist"}
                    title={"Wishlist"}
                  />
                </li>
                <li className="nav-item me-3 me-lg-4">
                  <NavIcon
                    icon={"fa-brands fa-opencart"}
                    badge={cartData?.cart?.products?.length}
                    href={"/cart"}
                    title={"Cart"}
                  />
                </li>
              </>
            )}
            <li className="nav-item me-0 me-lg-1 d-flex align-items-center">
              {isLoggedIn ? <Profile /> : <SignIn />}
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex align-items-center">
              <NavList href={"/"}>HOME</NavList>
              <NavList href={"/about"}>ABOUT</NavList>
              <NavList href={"/shop"}>SHOP</NavList>
              <NavList href={"/contact"}>CONTACT US</NavList>
              <NavList href={"/faq"}>FAQ</NavList>

              {isLoggedIn && (
                <NavList href={"/product"}>
                  <span className="text-main">Add Product</span>
                </NavList>
              )}
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
