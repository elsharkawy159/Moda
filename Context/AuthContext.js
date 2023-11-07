import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import BaseURL from "./BaseURL.js";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [usersByRoleRes, setUsersByRoleRes] = useState([]);
  const [signUpRes, setSignUpRes] = useState([]);
  const [signInRes, setSignInRes] = useState([]);
  const [updateUserRes, setUpdateUserRes] = useState([]);
  const [becomePartnerRes, setBecomePartnerRes] = useState([]);
  const [sendCodeRes, setSendCodeRes] = useState([]);
  const [forgetPasswordRes, setForgetPasswordRes] = useState([]);

  const usersByRole = async (token, role) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${BaseURL}/auth/users/${role || "user"}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsersByRoleRes(data);
    } catch (error) {
      setUsersByRoleRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/auth/signup`, userData);
      setSignUpRes(data);
    } catch (error) {
      setSignUpRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (credentials) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/auth/signin`, credentials);
      setSignInRes(data);
    } catch (error) {
      setSignInRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (userData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/auth/update`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUpdateUserRes(data);
    } catch (error) {
      setUpdateUserRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const becomePartner = async (partnerData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${BaseURL}/auth/becomePartner`,
        partnerData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBecomePartnerRes(data);
    } catch (error) {
      setBecomePartnerRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const sendCode = async (email) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/auth/sendcode`, email);
      setSendCodeRes(data);
    } catch (error) {
      setSendCodeRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const forgetPassword = async (resetPasswordData) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${BaseURL}/auth/forgetPassword`,
        resetPasswordData
      );
      setForgetPasswordRes(data);
    } catch (error) {
      setForgetPasswordRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const authContextValue = {
    isLoading,

    usersByRole,
    usersByRoleRes,

    signUp,
    signUpRes,

    signIn,
    signInRes,

    updateUser,
    updateUserRes,

    becomePartner,
    becomePartnerRes,

    sendCode,
    sendCodeRes,

    forgetPassword,
    forgetPasswordRes,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
