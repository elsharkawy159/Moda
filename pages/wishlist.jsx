import Link from "next/link.js";
import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";

const wishlist = () => {
  return (
    <>
      <PageHeader title={"my wishlist"} />
      <div className="container">
        <div className="row py-5 justify-content-center">
          <h1 className="text-main text-center">SOON</h1>
        </div>
      </div>
    </>
  );
};

export default wishlist;
