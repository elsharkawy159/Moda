import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import BaseURL from "./BaseURL.js";

const CouponContext = createContext();

export function useCoupon() {
  return useContext(CouponContext);
}

export function CouponProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [couponData, setCouponData] = useState([]);
  const [createCouponRes, setCreateCouponRes] = useState([]);
  const [updateCouponRes, setUpdateCouponRes] = useState([]);

  const getCoupon = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/coupon`);
      setCouponData(data);
    } catch (error) {
      setCouponData(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createCoupon = async (couponData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/coupon`, couponData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCreateCouponRes(data);
    } catch (error) {
      setCreateCouponRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCoupon = async (couponId, couponData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `${BaseURL}/coupon/${couponId}`,
        couponData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUpdateCouponRes(data);
    } catch (error) {
      setUpdateCouponRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const couponContextValue = {
    isLoading,
    couponData,
    createCouponRes,
    updateCouponRes,
    getCoupon,
    createCoupon,
    updateCoupon,
  };

  return (
    <CouponContext.Provider value={couponContextValue}>
      {children}
    </CouponContext.Provider>
  );
}
