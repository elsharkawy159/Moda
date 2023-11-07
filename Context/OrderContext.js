import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import BaseURL from "./BaseURL.js";

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [orderData, setOrderData] = useState([]);
  const [createOrderRes, setCreateOrderRes] = useState([]);
  const [cancelOrderRes, setCancelOrderRes] = useState([]);
  const [deliveredOrderRes, setDeliveredOrderRes] = useState([]);

  const getAllOrders = async (token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BaseURL}/order`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrderData(data);
    } catch (error) {
      setOrderData(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createOrder = async (orderData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${BaseURL}/order`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCreateOrderRes(data);
    } catch (error) {
      setCreateOrderRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelOrder = async (orderId, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(`${BaseURL}/order/${orderId}/cancel`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCancelOrderRes(data);
    } catch (error) {
      setCancelOrderRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const deliveredOrder = async (orderId, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(`${BaseURL}/order/${orderId}/status`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDeliveredOrderRes(data);
    } catch (error) {
      setDeliveredOrderRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const orderContextValue = {
    isLoading,
    orderData,
    createOrderRes,
    cancelOrderRes,
    deliveredOrderRes,
    getAllOrders,
    createOrder,
    cancelOrder,
    deliveredOrder,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
}
