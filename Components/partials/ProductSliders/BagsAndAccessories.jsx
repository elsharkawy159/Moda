import React from 'react'
import { useProduct } from '../../../Context/ProductContext.js';
import ProductsSliderComponent from '../ProductsSliderComponent.jsx';

const BagsAndAccessories = () => {
      const { productData, isLoading } = useProduct();
  return (
    <ProductsSliderComponent
      title={"Bags & Accessories"}
      isLoading={isLoading}
      tabTitle1={"MEN'S CLOTHES"}
      tabTitle2={"WOMEN'S CLOTHING"}
      productsData1={productData?.products}
      productsData2={productData?.products}
    />
  );
}

export default BagsAndAccessories