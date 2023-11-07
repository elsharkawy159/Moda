import Image from "next/image.js";
import Link from "next/link.js";
import React, { useState } from "react";
import NavIcon from "./NavIcon.jsx";

const Auth = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <Link
          className="profile nav-link d-sm-flex align-items-sm-center"
          href="/profile"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="rounded-circle"
            height="27"
            alt="profile image"
            loading="lazy"
          />
          <span className="d-none d-md-flex ms-1 fw-semibold">John</span>
        </Link>
      ) : (
        <NavIcon icon={"fa-regular fa-user"} href={"/auth"} title={"Sign In"} />
      )}
    </>
  );
};

export default Auth;
