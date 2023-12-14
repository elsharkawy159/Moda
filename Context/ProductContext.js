import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import BaseURL from "./BaseURL.js";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [productData, setProductData] = useState([]);
  const [productDetailsData, setProductDetailsData] = useState([]);
  const [createProductRes, setCreateProductRes] = useState([]);
  const [updateProductRes, setUpdateProductRes] = useState([]);
  const [addToWishlistRes, setAddToWishlistRes] = useState([]);
  const [removeFromWishlistRes, setRemoveFromWishlistRes] = useState([]);

  useEffect(() => {
    getProducts("");
  }, []);

  const getProducts = async (query) => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `${BaseURL}/product/?${query}`
      );
      setProductData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const getProductDetails = async (productSlug) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/product/${productSlug}`);
      setProductDetailsData(data);
      console.log(data);
    } catch (error) {
      setProductDetailsData(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createProduct = async (productData, images, token) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("mainImage", images.mainImage);
      images.subImages.forEach((subImage) => {
        formData.append("subImages", subImage);
      });

      const { data } = await axios.post(`${BaseURL}/product`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: productData,
      });
      setCreateProductRes(data);
    } catch (error) {
      setCreateProductRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (productId, productData, images, token) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("mainImage", images.mainImage);
      images.subImages.forEach((subImage) => {
        formData.append("subImages", subImage);
      });

      const { data } = await axios.put(
        `${BaseURL}/product/${productId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: productData,
        }
      );
      setUpdateProductRes(data);
    } catch (error) {
      setUpdateProductRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const addToWishlist = async (productId, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${BaseURL}/product/${productId}/wishlist/add`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAddToWishlistRes(data);
    } catch (error) {
      setAddToWishlistRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromWishlist = async (productId, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${BaseURL}/product/${productId}/wishlist/remove`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRemoveFromWishlistRes(data);
    } catch (error) {
      setRemoveFromWishlistRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const productContextValue = {
    isLoading,
    productData,
    createProductRes,
    updateProductRes,
    getProducts,
    getProductDetails,
    productDetailsData,
    createProduct,
    updateProduct,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
}
