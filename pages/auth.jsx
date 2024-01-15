import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../Context/AuthContext.js";

const auth = () => {
  const { signIn, signInRes, isLoading } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid Email Address")
        .required("Email Address is Required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Minimum password length is 8 characters")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Password should contains: Number, Lowercae and Uppercase Letters"
        ),
    }),
    onSubmit: (values) => {
      signIn(values);
      console.log(values);
    },
  });
  const { handleBlur, handleChange, handleSubmit, values } = formik;

  return (
    <>
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

                  {signInRes.success === true ? (
                    <div className="bg-success bg-opacity-100 text-center text-light p-1 rounded">
                      {signInRes.message}
                    </div>
                  ) : signInRes.message ? (
                    <div className="bg-danger bg-opacity-25 text-center text-danger p-1 rounded">
                      {signInRes.message}
                    </div>
                  ) : null}

                  <input
                    type="email"
                    id="loginName"
                    class="form-control mt-4"
                    placeholder="Email or username"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="bg-danger bg-opacity-25 text-center text-danger rounded">
                      {formik.errors.email}
                    </div>
                  ) : null}

                  <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    class="form-control mt-4"
                    placeholder="Password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="bg-danger bg-opacity-25 text-center text-danger rounded">
                      {formik.errors.password}
                    </div>
                  ) : null}

                  <div class="row my-4">
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
                  {isLoading ? (
                    <button class="btn btn-moda btn-block mb-4">
                      <i class="fa-solid fa-spinner fa-spin text-light"></i>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
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
                    <input type="text" id="registerName" class="form-control" />
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
    </>
  );
};

export default auth;
