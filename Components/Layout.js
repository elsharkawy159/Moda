import React from "react";
import Navbar from "./partials/Navbar/Navbar.jsx";
import Footer from "./partials/Footer.jsx";
import CallToAction from "./partials/CallToAction.jsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <CallToAction />
      <Footer />
    </>
  );
}

export default Layout;
