import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import BaseURL from "./BaseURL.js";

const ReviewContext = createContext();

export function useReview() {
  return useContext(ReviewContext);
}

export function ReviewProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const [createReviewRes, setCreateReviewRes] = useState([]);
  const [updateReviewRes, setUpdateReviewRes] = useState([]);

  const createReview = async (productId, reviewData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${BaseURL}/reviews/${productId}`,
        reviewData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCreateReviewRes(data);
    } catch (error) {
      setCreateReviewRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const updateReview = async (reviewId, reviewData, token) => {
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${BaseURL}/reviews/${reviewId}`,
        reviewData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUpdateReviewRes(data);
    } catch (error) {
      setUpdateReviewRes(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  const reviewContextValue = {
    isLoading,
    createReviewRes,
    updateReviewRes,
    createReview,
    updateReview,
  };

  return (
    <ReviewContext.Provider value={reviewContextValue}>
      {children}
    </ReviewContext.Provider>
  );
}
