import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import BaseURL from "./BaseURL.js";

const BrandContext = createContext();

export function useBrand() {
  return useContext(BrandContext);
}

export function BrandProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [createBrandRes, setCreateBrandRes] = useState([]);
  const [updateBrandRes, setUpdateBrandRes] = useState([]);
  const [deleteBrandRes, setDeleteBrandRes] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/brand`);
      setBrandData(data);
    } catch (error) {
      setBrandData(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createBrand = async (brandData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/brand`, brandData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCreateBrandRes(data);
    } catch (error) {
      setCreateBrandRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateBrand = async (brandId, brandData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `${BaseURL}/brand/${brandId}`,
        brandData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUpdateBrandRes(data);
    } catch (error) {
      setUpdateBrandRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBrand = async (brandId, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.delete(`${BaseURL}/brand/${brandId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDeleteBrandRes(data);
    } catch (error) {
      setUpdateBrandRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const brandContextValue = {
    isLoading,
    brandData,
    createBrandRes,
    updateBrandRes,
    deleteBrandRes,
    getBrands,
    createBrand,
    updateBrand,
    deleteBrand,
  };

  return (
    <BrandContext.Provider value={brandContextValue}>
      {children}
    </BrandContext.Provider>
  );
}
