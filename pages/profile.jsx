import Link from "next/link.js";
import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";

const Profile = () => {
  return (
    <>
      <PageHeader title={"my Profile"} />
      <div className="container">
        <div className="row py-5"></div>
      </div>
    </>
  );
};

export default Profile;
