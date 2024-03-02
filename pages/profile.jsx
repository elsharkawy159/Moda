import Link from "next/link.js";
import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import { useAuth } from "../Context/AuthContext.js";

const Profile = () => {
  const { isLoggedIn } = useAuth();
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
            <div class="container h-100">
              <div class="row d-flex justify-content-center h-100">
                <div class="col col-lg-12 mb-4 mb-lg-0">
                  <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4 gradient-custom text-center text-white">
                        <img
                          src="/img/profile.png"
                          alt="Avatar"
                          class="img-fluid my-5"
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-4">
                          <h6>Personal Info</h6>
                          <hr class="mt-0 mb-4" />
                          <div class="row pt-1">
                            <div class="col-4 mb-3">
                              <h6>Name</h6>
                              <p class="text-muted">Omar</p>
                            </div>
                            <div class="col-4 mb-3">
                              <h6>Email</h6>
                              <p class="text-muted">info@example.com</p>
                            </div>
                            <div class="col-4 mb-3">
                              <h6>Phone</h6>
                              <p class="text-muted">123 456 789</p>
                            </div>
                          </div>
                          <h6>Other Info</h6>
                          <hr class="mt-0 mb-4" />
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Role</h6>
                              <p class="text-muted">User</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Gender</h6>
                              <p class="text-muted">Male</p>
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
