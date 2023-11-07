import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import BaseURL from "./BaseURL.js";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [addToCartRes, setAddToCartRes] = useState([]);
  const [deleteFromCartRes, setDeleteFromCartRes] = useState([]);
  const [clearCartRes, setClearCartRes] = useState([]);

  const getUserCart = async (token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartData(data);
    } catch (error) {
      setCartData(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (cartItemData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/cart`, cartItemData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddToCartRes(data);
    } catch (error) {
      setAddToCartRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFromCart = async (cartItemId, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(`${BaseURL}/cart/remove`, cartItemId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDeleteFromCartRes(data);
    } catch (error) {
      setDeleteFromCartRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = async (token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(`${BaseURL}/cart/clear`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClearCartRes(data);
    } catch (error) {
      setClearCartRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const cartContextValue = {
    isLoading,
    cartData,
    addToCartRes,
    deleteFromCartRes,
    clearCartRes,
    getUserCart,
    addToCart,
    deleteFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
