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
  const makeValidId = (title) => {
    if (title) {
      return title.replace(/\s+/g, "-").toLowerCase();
    }
    return "";
  };

  const tabId1 = makeValidId(tabTitle1);
  const tabId2 = makeValidId(tabTitle2);

  return (
    <div className="row py-3 gy-4 py-md-5">
      <div className="sliderComp d-flex justify-content-between align-items-center">
        <h4 className="m-0 fw-semibold">{title}</h4>
        <ul className="nav nav-tabs" id="ex1" role="tablist">
          {tabTitle1 && (
            <li className="nav-item" role="presentation">
              <a
                className="nav-link text-uppercase active"
                id={`${tabId1}s`}
                data-mdb-toggle="tab"
                href={`#${tabId1}`}
                role="tab"
                aria-controls={tabId1}
                aria-selected="true"
              >
                {tabTitle1}
              </a>
            </li>
          )}
          {tabTitle2 && (
            <li className="nav-item" role="presentation">
              <a
                className="nav-link text-uppercaseS"
                id={`${tabId2}s`}
                data-mdb-toggle="tab"
                href={`#${tabId2}`}
                role="tab"
                aria-controls={tabId2}
                aria-selected="false"
              >
                {tabTitle2}
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id={tabId1}
          role="tabpanel"
          aria-labelledby={`${tabId1}s`}
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
          id={tabId2}
          role="tabpanel"
          aria-labelledby={`${tabId2}s`}
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
