import React, { useState, useEffect } from "react";
import ProductsSliderComponent from "../ProductsSliderComponent.jsx";
import { useProduct } from "../../../Context/ProductContext.js";

const TrendingNow = () => {
  const { productData, isLoading } = useProduct();
  return (
    <ProductsSliderComponent
      title={"Trending Now"}
      isLoading={isLoading}
      tabTitle1={"MEN'S CLOTHES"}
      tabTitle2={"WOMEN'S CLOTHING"}
      productsData1={productData?.products}
      productsData2={productData?.products}
    />
  );
};

export default TrendingNow;
