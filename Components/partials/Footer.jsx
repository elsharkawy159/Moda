import Link from "next/link.js";
import React from "react";
import Logo from "./Navbar/partials/Logo.jsx";

const FooterLink = ({ href, text }) => {
  return (
    <p className="mb-2">
      <Link href={href} className="text-secondary fw-normal">
        {text}
      </Link>
    </p>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-google", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-github", href: "#" },
  ];

  const informationLinks = [
    { href: "#", text: "About Moda" },
    { href: "#", text: "How to shop on Moda" },
    { href: "#", text: "FAQ" },
    { href: "#", text: "Contact Us" },
  ];

  const customerServiceLinks = [
    { href: "#", text: "Payment Methods" },
    { href: "#", text: "Money-back guarantee!" },
    { href: "#", text: "Returns" },
    { href: "#", text: "Shipping" },
    { href: "#", text: "Terms and conditions" },
    { href: "#", text: "Privacy Policy" },
  ];

  const myAccountLinks = [
    { href: "#", text: "Sign In" },
    { href: "#", text: "View Cart" },
    { href: "#", text: "My Wishlist" },
    { href: "#", text: "Track My Order" },
    { href: "#", text: "Help" },
  ];

  return (
    <>
      <footer
        className="text-center text-lg-start text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      >
        <section className="container d-flex justify-content-center p-4 border-bottom">
          <div>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="me-4 text-light">
                <i className={link.icon + " fs-5"}></i>
              </a>
            ))}
          </div>
        </section>
        <section>
          <div className="container-lg container-fluid text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 mx-auto mb-4">
                <Logo hatColor={"text-light"} />
                <div className="mb-2"></div>
                <p className="mb-4">
                  Offering a world-class customer experience, MODA is the top
                  choice for online shopping in Egypt.
                </p>
                <h6 className="fw-semibold mb-3">Payment Methods</h6>
                <img
                  src="img/payments.png"
                  alt="payments methods"
                  className="mb-2"
                />
              </div>

              <div className="col-md-2 mx-auto mb-4">
                <h6 className="fw-semibold mb-3">Information</h6>
                {informationLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href} text={link.text} />
                ))}
              </div>

              <div className="col-md-2 mx-auto mb-4">
                <h6 className="fw-semibold mb-3">Customer Service</h6>
                {customerServiceLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href} text={link.text} />
                ))}
              </div>

              <div className="col-md-2 mx-auto mb-4">
                <h6 className="fw-semibold mb-3">My Account</h6>
                {myAccountLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href} text={link.text} />
                ))}
              </div>

              <div className="col-md-3 mx-auto mb-md-0 mb-4">
                <h6 className="fw-semibold mb-3">Contact</h6>
                <p>
                  <Link href={"/"} className="text-secondary fw-normal">
                    <i className="fas fa-home me-3"></i> Ain Shams, Cairo, Egypt
                  </Link>
                </p>
                <p>
                  <Link
                    href={"mailto:elsharkawy159.om@gmail.com"}
                    className="text-secondary fw-normal"
                  >
                    <i className="fas fa-envelope me-3"></i>{" "}
                    elsharkawy159.om@gmail.com
                  </Link>
                </p>
                <p>
                  <Link
                    href={"https://wa.me/+201152372358"}
                    target="_blank"
                    className="text-secondary fw-normal"
                  >
                    <i className="fas fa-phone me-3"></i>
                    +20 115 237 2358
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
        >
          &copy; {new Date().getFullYear()} Moda. All rights reserved. Developed
          by{" "}
          <Link className="text-secondary" href={"/"}>
            Omar M. Abdelhamid
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
