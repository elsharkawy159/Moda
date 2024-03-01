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
  MDBRadio,
} from "mdb-react-ui-kit";
import Link from "next/link.js";
import PageHeader from "../Components/partials/PageHeader.jsx";

const login = () => {
  const { signUp, signUpRes, isLoading } = useAuth();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      cPassword: "",
      phone: "",
      gender: "",
    },
    validationSchema: yup.object({
      userName: yup.string().min(5).required("userName is required"),
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
      cPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      phone: yup.string().required("Phone number is required"),
    }),
    onSubmit: async (values) => {
      try {
        await signUp(values);
      } catch (error) {
        console.error("Sign up error:", error.message);
      }
    },
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    formik;

  return (
    <>
      <PageHeader title={"Register"} />
      <div className="container">
        <div className="row py-5 border-bottom">
          <div className="col-md-6 m-auto">
            {signUpRes.success ? (
              <p className="text-center text-success fw-bold">
                {signUpRes.message} ✅
                <br />
                Directing to Login...
              </p>
            ) : (
              <p className="text-center text-danger fw-bold">
                {signUpRes.message}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <MDBInput
                className="mt-4 mb-2"
                type="text"
                id="userName"
                name="userName"
                label="userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.userName && errors.userName && (
                <span className="text-danger text-center">
                  {errors.userName}
                </span>
              )}
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
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <span className="text-danger text-center">
                  {errors.password}
                </span>
              )}
              <MDBInput
                className="mb-2 mt-4"
                type="cPassword"
                id="cPassword"
                name="cPassword"
                label="Confirm Password"
                value={values.cPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.cPassword && errors.cPassword && (
                <span className="text-danger text-center">
                  {errors.cPassword}
                </span>
              )}
              <MDBInput
                className="mb-2 mt-4"
                type="tel"
                id="phone"
                name="phone"
                label="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && (
                <span className="text-danger text-center">{errors.phone}</span>
              )}
              <div className="d-flex justify-content-evenly">
                <span>Gender</span>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Male"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Female"
                />
              </div>
              <button
                type="submit"
                className="mb-4 btn btn-moda d-flex m-auto px-5 mt-4"
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>

              <div className="text-center">
                <p>
                  Have an account? <Link href="login">Login</Link>
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
