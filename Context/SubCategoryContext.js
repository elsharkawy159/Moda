import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import BaseURL from "./BaseURL.js";

const SubcategoryContext = createContext();

export function useSubcategory() {
  return useContext(SubcategoryContext);
}

export function SubcategoryProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [getSubcategoriesRes, setGetSubcategoriesRes] = useState([]);
  const [createSubcategoryRes, setCreateSubcategoryRes] = useState([]);
  const [updateSubcategoryRes, setUpdateSubcategoryRes] = useState([]);

  useEffect(() => {
    getSubcategories()
  }, [])
  
  const getSubcategories = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/subcategory`);
      setGetSubcategoriesRes(data);
    } catch (error) {
      setGetSubcategoriesRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createSubcategory = async (categoryId, image, token) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios.post(
        `${BaseURL}/subcategory/${categoryId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCreateSubcategoryRes(data);
    } catch (error) {
      setCreateSubcategoryRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSubcategory = async (subcategoryId, image, token) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios.put(
        `${BaseURL}/subcategory/${subcategoryId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUpdateSubcategoryRes(data);
    } catch (error) {
      setUpdateSubcategoryRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const subcategoryContextValue = {
    isLoading,

    getSubcategories,
    getSubcategoriesRes,

    createSubcategory,
    createSubcategoryRes,

    updateSubcategory,
    updateSubcategoryRes,
  };

  return (
    <SubcategoryContext.Provider value={subcategoryContextValue}>
      {children}
    </SubcategoryContext.Provider>
  );
}
