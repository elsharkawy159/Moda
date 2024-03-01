import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../Context/AuthContext.js";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Link from "next/link.js";
import PageHeader from "../Components/partials/PageHeader.jsx";

const login = () => {
  const { signIn, signInRes, isLoading, isLoggedIn } = useAuth();

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
          "Password should contain: Number, Lowercase, and Uppercase Letters"
        ),
    }),
    onSubmit: async (values) => {
      try {
        await signIn(values);
      } catch (error) {
        console.error("Sign in error:", error.message);
      }
    },
  });
  console.log(isLoggedIn);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    formik;

  return (
    <>
      <PageHeader title={"Sign In"} />
      <div className="container">
        <div className="row py-5 border-bottom">
          <div className="col-md-6 m-auto">
            {signInRes.success ? (
              <p className="text-center text-success fw-bold">
                {signInRes.message} ✅
                <br />
                Directing to Home...
              </p>
            ) : (
              <p className="text-center text-danger fw-bold">
                {signInRes.message}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <MDBInput
                className="mt-4 mb-2"
                type="email"
                id="email"
                name="email"
                label="Email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <span className="text-danger text-center">{errors.email}</span>
              )}
              <MDBInput
                className="mb-2 mt-4"
                type="password"
                id="password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onInput={handleBlur}
              />
              {touched.password && errors.password && (
                <span className="text-danger text-center">
                  {errors.password}
                </span>
              )}

              <MDBRow className="mb-4">
                <MDBCol className="d-flex justify-content-center">
                  <MDBCheckbox
                    id="remember"
                    name="remember"
                    label="Remember me"
                    defaultChecked
                  />
                </MDBCol>
                <MDBCol>
                  <a href="#!">Forgot password?</a>
                </MDBCol>
              </MDBRow>

              <button
                type="submit"
                className="mb-4 btn btn-moda d-flex m-auto px-5"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>

              <div className="text-center">
                <p>
                  Not a member? <Link href="register">Register</Link>
                </p>
                <p>or sign up with:</p>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
