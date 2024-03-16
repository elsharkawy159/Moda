import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../Context/AuthContext.js";
import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Link from "next/link.js";
import Select from "react-select";
import PageHeader from "../Components/partials/PageHeader.jsx";

const Login = () => {
  const { signUp, signUpRes, isLoading } = useAuth();
  const [gender, setGender] = useState("");
  const [countdown, setCountdown] = useState(5);
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  useEffect(() => {
    // Countdown timer
    if (signUpRes.success) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear interval when countdown reaches 0
      if (countdown === 0) {
        clearInterval(countdownInterval);
      }

      // Cleanup function
      return () => clearInterval(countdownInterval);
    }
  }, [signUpRes.success, countdown]);

  const handleRegister = async (values, { resetForm }) => {
    values.gender = gender;
    values.phone = values.phone.split(",").map((phone) => phone.trim());
    console.log(values);
    await signUp(values);
    resetForm();
    setCountdown(5);
  };

  const validationSchema = yup.object({
    userName: yup.string().min(5).required("User Name is required"),
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
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone: yup
      .string()
      .matches(/^(002|\+2)?01[0125][0-9]{8}$/, {
        message: "Invalid phone number",
        excludeEmptyString: true,
      })
      .required("Phone field is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      cPassword: "",
      phone: "",
      gender: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleRegister,
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    dirty,
  } = formik;

  return (
    <>
      <PageHeader title={"Register"} />
      <div className="container">
        <div className="row py-5 border-bottom">
          <div className="col-md-6 m-auto  p-md-5 bg-light bg-opacity-50 rounded-3 border">
            {signUpRes.success ? (
              <p className="text-center text-success fw-bold">
                {signUpRes.message} ✅
                <br />
                Directing to Login Page in{" "}
                <span className="text-danger fw-bold">{countdown}</span> Seconds
              </p>
            ) : (
              <p className="text-center text-danger fw-bold">
                {signUpRes.message}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <MDBInput
                type="text"
                id="userName"
                name="userName"
                label="User Name"
                value={values.userName}
                onChange={handleChange}
                autoComplete="off"
                onBlur={handleBlur}
              />
              {touched.userName && errors.userName && (
                <span className="text-danger text-center text-sm">
                  {errors.userName}
                </span>
              )}
              <MDBInput
                className="mt-4"
                type="email"
                id="email"
                name="email"
                label="Email address"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <span className="text-danger text-center text-sm">
                  {errors.email}
                </span>
              )}
              <MDBInput
                className="mt-4"
                type="password"
                id="password"
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <span className="text-danger text-center text-sm">
                  {errors.password}
                </span>
              )}
              <MDBInput
                className="mt-4"
                type="password"
                id="cPassword"
                name="cPassword"
                label="Confirm Password"
                value={values.cPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.cPassword && errors.cPassword && (
                <span className="text-danger text-center text-sm">
                  {errors.cPassword}
                </span>
              )}
              <MDBInput
                className="mt-4"
                type="tel"
                id="phone"
                name="phone"
                label="Phone"
                value={values.phone}
                onChange={handleChange}
                autoComplete="off"
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && (
                <span className="text-danger text-center text-sm">
                  {errors.phone}
                </span>
              )}
              <div className="mt-4">
                <Select
                  value={genders.find((g) => g.value === gender)}
                  onChange={(selectedOption) => setGender(selectedOption.value)}
                  options={genders}
                  placeholder="Gender"
                  name="gender"
                  isSearchable={false}
                />
                {!gender && touched.gender && (
                  <span className="text-danger text-center text-sm">
                    Gender is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="mb-4 btn btn-moda d-flex m-auto px-5 mt-4"
                disabled={isSubmitting || !isValid || !dirty}
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

export default Login;
