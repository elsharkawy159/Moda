import Link from "next/link.js";
import { React, useEffect, useState } from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import { useAuth } from "../Context/AuthContext.js";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [credit, setCredit] = useState("");
  const [phone, setPhone] = useState("");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      setUserName(JSON.parse(localStorage.getItem("userName")));
      setEmail(JSON.parse(localStorage.getItem("email")));
      setRole(JSON.parse(localStorage.getItem("role")));
      setGender(JSON.parse(localStorage.getItem("gender")));
      setCredit(JSON.parse(localStorage.getItem("credit")));
      setPhone(JSON.parse(localStorage.getItem("phone")));
    }
  }, [isLoggedIn]);

  return (
    <>
      <PageHeader title={"my Profile"} />
      <div className="container">
        <div className="row py-5 ">
          {!isLoggedIn ? (
            <Link href={"/login"} className="m-auto col-md-3">
              <button className="btn btn-moda w-100">Sign In</button>
            </Link>
          ) : (
            <div className="container h-100">
              <div className="row d-flex justify-content-center h-100">
                <div className="col col-lg-12 mb-4 mb-lg-0">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4 gradient-custom text-center text-white">
                        <img
                          src="/img/profile.png"
                          alt="Avatar"
                          className="img-fluid my-5"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-4">
                          <h6>Personal Info</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-md-4 mb-3">
                              <h6>Name</h6>
                              <p className="text-muted">{userName}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">{email}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                              <h6>Phone</h6>
                              <p className="text-muted">{phone}</p>
                            </div>
                          </div>
                          <h6>Other Info</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-md-4 mb-3">
                              <h6>Role</h6>
                              <p className="text-muted">{role}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                              <h6>Gender</h6>
                              <p className="text-muted">{gender}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                              <h6>Credit</h6>
                              <p className="text-muted">{credit} EGP</p>
                            </div>
                          </div>
                          <Link href={"/cart"}>
                            <button className="btn btn-moda px-5 py-2">
                              My Cart
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
