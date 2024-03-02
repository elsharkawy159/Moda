import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import BaseURL from "./BaseURL.js";
import { useAuth } from "./AuthContext.js";
import showToast from "../public/js/alert.js";

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
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      getUserCart(JSON.parse(localStorage.getItem("userToken")));
    }
  }, [isLoggedIn]);
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
      showToast("success", "Done");
    } catch (error) {
      setAddToCartRes(error?.response?.data);
      console.log(error?.response?.data);
      if (
        error?.response?.data?.message ==
        "In-valid product max available stock is :undefined"
      ) {
        showToast("warning", "Maximum Stock Reached");
      }
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
      showToast("success", "Removed Successfully");
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
      const { data } = await axios.patch(`${BaseURL}/cart/clear`, null, {
        headers: { Authorization: `Barer_${token}` },
      });
      showToast("success", "Cart cleared successfully");
      setClearCartRes(data);
      getUserCart(JSON.parse(localStorage.getItem("userToken")));
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
