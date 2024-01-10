import React from "react";
import { useProduct } from "../../../Context/ProductContext.js";
import ProductsSliderComponent from "../ProductsSliderComponent.jsx";

const FeaturedFootwear = () => {
  const { productData, isLoading } = useProduct();

  const menProducts = productData?.products?.filter(
    (product) => product.categoryId.name === "kids & baby"
  );

  const womenProducts = productData?.products?.filter(
    (product) => product.categoryId.name === "women"
  );

  return (
    <ProductsSliderComponent
      title={"Featured Clothes"}
      isLoading={isLoading}
      tabTitle1={"KIDS AND BABY"}
      tabTitle2={"WOMEN"}
      productsData1={menProducts}
      productsData2={womenProducts}
    />
  );
};

export default FeaturedFootwear;
