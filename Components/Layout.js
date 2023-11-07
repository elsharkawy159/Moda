import React from "react";
import Navbar from "./partials/Navbar/Navbar.jsx";
import Footer from "./partials/Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
