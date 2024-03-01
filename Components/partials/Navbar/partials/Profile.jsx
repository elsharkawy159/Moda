import Link from "next/link.js";
import React from "react";
import NavIcon from "./NavIcon.jsx";

const Profile = () => {
  const handleLogOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    window.location.href = "/";
  };
  const userName = JSON.parse(localStorage.getItem("userName"));
  return (
    <>
      <Link
        className="profile nav-link d-sm-flex align-items-sm-center"
        href="/profile"
      >
        <NavIcon icon={"fa-solid fa-user"} href={"/profile"} title={"Profile"} />
        <span className="d-none d-md-flex ms-1 fw-semibold">{userName}</span>
      </Link>
      <span onClick={handleLogOut} className="pointer ms-2">
        <i class="fa-solid fa-arrow-right-from-bracket text-danger"></i>
      </span>
    </>
  );
};

export default Profile;
