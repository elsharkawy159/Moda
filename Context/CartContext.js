import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import BaseURL from "./BaseURL.js";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [addToCartRes, setAddToCartRes] = useState([]);
  const [deleteFromCartRes, setDeleteFromCartRes] = useState([]);
  const [clearCartRes, setClearCartRes] = useState([]);

  const getUserCart = async (token) => {
    try {
      setIsLoadingCart(true);
      const { data } = await axios.get(`${BaseURL}/cart`, {
        headers: { Authorization: `Barer_${token}` },
      });
      setCartData(data);
      console.log(data);
    } catch (error) {
      setCartData(error?.response?.data);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const addToCart = async (cartItemData, token) => {
    try {
      setIsLoadingCart(true);
      const { data } = await axios.post(`${BaseURL}/cart`, cartItemData, {
        headers: { Authorization: `Barer_${token}` },
      });
      setAddToCartRes(data);
      getUserCart(JSON.parse(localStorage.getItem("userToken")));
    } catch (error) {
      setAddToCartRes(error?.response?.data);
      console.log(error);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const deleteFromCart = async (cartItemId, token) => {
    try {
      setIsLoadingCart(true);
      const { data } = await axios.patch(`${BaseURL}/cart/remove`, cartItemId, {
        headers: { Authorization: `Barer_${token}` },
      });
      setDeleteFromCartRes(data);
      getUserCart(JSON.parse(localStorage.getItem("userToken")));
    } catch (error) {
      setDeleteFromCartRes(error?.response?.data);
      console.log(data);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const clearCart = async (token) => {
    console.log(token);
    try {
      setIsLoadingCart(true);
      const { data } = await axios.patch(`${BaseURL}/cart/clear`, {
        headers: { Authorization: `Barer_${token}` },
      });
      setClearCartRes(data);
    } catch (error) {
      setClearCartRes(error?.response?.data);
      console.log(error?.response?.data);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const cartContextValue = {
    isLoadingCart,
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
