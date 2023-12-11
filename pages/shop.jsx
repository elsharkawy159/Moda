import React, { useState } from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import ProductCard from "../Components/partials/ProductCard/ProductCard.jsx";
import { useProduct } from "../Context/ProductContext.js";

const priceRanges = [
  { label: "Under 500", value: "&price[$lt]=500" },
  { label: "500 To 1000", value: "price[$gt]=500&price[$lt]=1000" },
  { label: "1000 To 5000", value: "price[$gt]=1000&price[$lt]=5000" },
  { label: "+5000", value: "price[$gt]=5000" },
];

const Shop = () => {
  const { getProducts, productData, isLoading } = useProduct();

  const [filters, setFilters] = useState({
    searchKey: "",
    category: "",
    subcategory: "",
    price: "",
    color: "",
    size: "",
    brand: "",
    top: "",
    new: "",
    rating: "",
  });

  const applyFilters = () => {
    const queryParams = Object.entries(filters)
      .map(([key, value]) => value && `${key}=${value}`)
      .filter(Boolean)
      .join("&");

    getProducts(queryParams);
  };

  const handleReset = () => {
    setFilters({
      searchKey: "",
      category: "",
      subcategory: "",
      price: "",
      color: "",
      size: "",
      brand: "",
      top: "",
      new: "",
      rating: "",
    });
    getProducts("");
  };

  const handlePriceChange = (priceValue) => {
    setFilters({ ...filters, price: priceValue });
    applyFilters();
  };

  return (
    <>
      <PageHeader
        title={"Shop"}
        subTitle={
          "Offering a world-class customer experience, MODA is the top choice for online shopping in Egypt."
        }
      />
      <div className="container">
        <div className="row pb-5">
          {/* Existing JSX code for filter side */}
          {/* ... */}
          <div className="col-md-3 shadow-4 border border-top-0 border-bottom-0">
            <div className="side py-4 px-2">
              <h4>Filter</h4>
              <div>
                <label className="form-label pt-2 fw-semibold">Price</label>
                {priceRanges.map((range, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={`flexRadioDefault${index + 1}`}
                      value={range.value}
                      checked={filters.price === range.value}
                      onChange={() => handlePriceChange(range.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexRadioDefault${index + 1}`}
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
              {/* Other filters (color, size, brand, etc.) */}
              {/* ... */}
              <button
                className="btn btn-moda w-100 rounded-0 rounded-bottom"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
          {/* Existing JSX code for product display */}
          {/* ... */}
        </div>
      </div>
    </>
  );
};

export default Shop;
