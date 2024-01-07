import React from "react";
import { useProduct } from "../../../Context/ProductContext.js";
import ProductsSliderComponent from "../ProductsSliderComponent.jsx";

const BagsAndAccessories = () => {
  const { productData, isLoading } = useProduct();

  const menProducts = productData?.products?.filter(
    (product) => product.categoryId.name === "men"
  );

  const womenProducts = productData?.products?.filter(
    (product) => product.categoryId.name === "women"
  );

  return (
    <ProductsSliderComponent
      title={"Bags & Accessories"}
      isLoading={isLoading}
      tabTitle1={"WOMEN CLOTHES"}
      tabTitle2={"MEN CLOTHES"}
      productsData1={womenProducts}
      productsData2={menProducts}
    />
  );
};

export default BagsAndAccessories;
