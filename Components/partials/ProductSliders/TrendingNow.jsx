import React, { useState, useEffect } from "react";
import ProductsSliderComponent from "../ProductsSliderComponent.jsx";
import { useProduct } from "../../../Context/ProductContext.js";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const TrendingNow = () => {
  const { productData, isLoading } = useProduct();

  const shuffledProducts = productData?.products
    ? shuffleArray([...productData.products])
    : [];

  return (
    <div className="trendingNow">
      <ProductsSliderComponent
        title={"Trending Now"}
        isLoading={isLoading}
        productsData1={shuffledProducts}
      />
    </div>
  );
};

export default TrendingNow;
