import React from 'react'
import { useProduct } from '../../../Context/ProductContext.js';
import ProductsSliderComponent from '../ProductsSliderComponent.jsx';

const FeaturedFootwear = () => {
      const { productData, isLoading } = useProduct();
  return (
    <ProductsSliderComponent
      title={"Featured Footwear"}
      isLoading={isLoading}
      tabTitle1={"MEN'S SHOES"}
      tabTitle2={"WOMEN'S SHOES"}
      productsData1={productData?.products}
      productsData2={productData?.products}
    />
  );
}

export default FeaturedFootwear