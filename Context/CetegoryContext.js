import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import BaseURL from "./BaseURL.js";

const CategoryContext = createContext();

export function useCategory() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [createCategoryRes, setCreateCategoryRes] = useState([]);
  const [updateCategoryRes, setUpdateCategoryRes] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/category`);
      setCategoryData(data);
      // console.log(data);
    } catch (error) {
      setCategoryData(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createCategory = async (category, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/category`, category, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCreateCategoryRes(data);
    } catch (error) {
      setCreateCategoryRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCategory = async (categoryId, category, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `${BaseURL}/category/${categoryId}`,
        category,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUpdateCategoryRes(data);
    } catch (error) {
      setUpdateCategoryRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const categoryContextValue = {
    isLoading,
    categoryData,
    createCategoryRes,
    updateCategoryRes,
    getCategories,
    createCategory,
    updateCategory,
  };

  return (
    <CategoryContext.Provider value={categoryContextValue}>
      {children}
    </CategoryContext.Provider>
  );
}
