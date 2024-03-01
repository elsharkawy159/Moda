import Link from "next/link.js";
import React from "react";
import NavIcon from "./NavIcon.jsx";

const SignIn = () => {
  return (
    <>
      <NavIcon icon={"fa-regular fa-user"} href={"/login"} title={"Sign In"} />
    </>
  );
};

export default SignIn;
