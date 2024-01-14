import Link from "next/link.js";
import React from "react";
import { Formik } from "formik";

const auth = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="container">
            <div className="row py-5 border-bottom">
              <div className="col-md-6 m-auto">
                <ul
                  class="nav nav-pills nav-justified mb-3"
                  id="ex1"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      id="tab-login"
                      data-mdb-pill-init
                      href="#pills-login"
                      role="tab"
                      aria-controls="pills-login"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="tab-register"
                      data-mdb-pill-init
                      href="#pills-register"
                      role="tab"
                      aria-controls="pills-register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="pills-login"
                    role="tabpanel"
                    aria-labelledby="tab-login"
                  >
                    <form onSubmit={handleSubmit}>
                      <div class="text-center mb-3">
                        <p>Sign in with:</p>
                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center">Or</p>

                      <span className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </span>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="email"
                          id="loginName"
                          class="form-control"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <label class="form-label" for="loginName">
                          Email or username
                        </label>
                      </div>

                      <span className="text-danger">
                        {errors.password && touched.password && errors.password}
                      </span>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="password"
                          id="loginPassword"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          class="form-control"
                        />
                        <label class="form-label" for="loginPassword">
                          Password
                        </label>
                      </div>

                      <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                          <div class="form-check mb-3 mb-md-0">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="loginCheck"
                              checked
                            />
                            <label class="form-check-label" for="loginCheck">
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div class="col-md-6 d-flex justify-content-center">
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
                      {isSubmitting ? (
                        <button class="btn btn-moda btn-block mb-4">
                          <i class="fa-solid fa-spinner fa-spin text-light"></i>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          class="btn btn-moda btn-block mb-4"
                        >
                          Sign in
                        </button>
                      )}
                      <div class="text-center">
                        <p>
                          Not a member? <a href="#!">Register</a>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-register"
                    role="tabpanel"
                    aria-labelledby="tab-register"
                  >
                    <form>
                      <div class="text-center mb-3">
                        <p>Sign up with:</p>
                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          data-mdb-ripple-init
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center">or:</p>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="text"
                          id="registerName"
                          class="form-control"
                        />
                        <label class="form-label" for="registerName">
                          Name
                        </label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="text"
                          id="registerUsername"
                          class="form-control"
                        />
                        <label class="form-label" for="registerUsername">
                          Username
                        </label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="email"
                          id="registerEmail"
                          class="form-control"
                        />
                        <label class="form-label" for="registerEmail">
                          Email
                        </label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="password"
                          id="registerPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerPassword">
                          Password
                        </label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="password"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Repeat password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-4">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="registerCheck"
                          checked
                          aria-describedby="registerCheckHelpText"
                        />
                        <label class="form-check-label" for="registerCheck">
                          I have read and agree to the terms
                        </label>
                      </div>

                      <button
                        data-mdb-ripple-init
                        type="submit"
                        class="btn btn-moda btn-block mb-3"
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default auth;
