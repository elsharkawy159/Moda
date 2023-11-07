import React, { useEffect } from "react";
import Slider from "react-slick";
import SliderSettings from "../features/SliderSettings.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";

const ProductsSliderComponent = ({
  isLoading,
  title,
  tabTitle1,
  tabTitle2,
  productsData1,
  productsData2,
}) => {
  return (
    <div className="row py-5 gy-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="m-0 fw-semibold">{title}</h4>
        <ul className="nav nav-tabs" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link text-uppercase active"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              {tabTitle1}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link text-uppercaseS"
              id="ex1-tab-2"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              {tabTitle2}
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <div className="row">
            <Slider {...SliderSettings}>
              {productsData1?.map((product, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <ProductCard product={product} isLoading={isLoading} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="ex1-tabs-2"
          role="tabpanel"
          aria-labelledby="ex1-tab-2"
        >
          <div className="row">
            <Slider {...SliderSettings}>
              {productsData2?.map((product, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <ProductCard product={product} isLoading={isLoading} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSliderComponent;
