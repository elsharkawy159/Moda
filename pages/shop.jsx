import React, { useState } from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import ProductCard from "../Components/partials/ProductCard/ProductCard.jsx";
import { useProduct } from "../Context/ProductContext.js";

const Shop = () => {
  const { getProducts, productData, isLoading } = useProduct();

  const [filters, setFilters] = useState({
    searchKey: "",
    category: "",
    subcategory: "",
    priceRange: { min: 1, max: 5000 }, // Updated max price to 5000
    color: "",
    size: "",
    brand: "",
    top: false,
    new: false,
    rating: 0,
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFilters({ ...filters, [name]: newValue });
    applyFilters(); // Call function to apply filters
  };

  const applyFilters = () => {
    const queryParams = Object.entries(filters)
      .map(([key, value]) => {
        if (value !== "" && value !== false && value !== 0) {
          return `${key}=${value}`;
        }
        return null;
      })
      .filter((query) => query !== null)
      .join("&");

    getProducts(queryParams); // Make API call with filtered query parameters
  };

  const handleReset = () => {
    setFilters({ ...filters, searchKey: "" }); // Reset search key
    getProducts(""); // Reset products
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
          {/* Filter side bar */}
          {/* ... */}
          <div className="col-md-3 shadow-4 border border-top-0 border-bottom-0">
            <div className="side py-4 px-2">
              <h4>Filter</h4>
              {/* Search input */}
              <div className="my-2">
                <label htmlFor="search">Search</label>
                <input
                  onChange={handleFilterChange}
                  type="search"
                  id="search"
                  name="searchKey"
                  className="form-control"
                />
              </div>

              {/* Category dropdown */}
              {/* ... */}

              {/* Price range slider */}
              <div>
                <label
                  className="form-label pt-2 fw-semibold"
                  htmlFor="customRange1"
                >
                  Price
                </label>
                <div className="range" data-mdb-range-init>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    min={1}
                    max={filters.priceRange.max}
                    value={filters.priceRange.min}
                    onChange={handleFilterChange}
                    name="priceRange.min"
                  />
                  <p className="text-sm text-muted mt-n2">
                    Min: {filters.priceRange.min} EGP
                  </p>
                </div>
                <div className="range" data-mdb-range-init>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange2"
                    min={filters.priceRange.min}
                    max={5000}
                    value={filters.priceRange.max}
                    onChange={handleFilterChange}
                    name="priceRange.max"
                  />
                  <p className="text-sm text-muted mt-n2">
                    Max: {filters.priceRange.max} EGP
                  </p>
                </div>
              </div>

              {/* Other filters (color, size, brand, etc.) */}
              {/* ... */}

              <button
                className="btn btn-moda w-100 mt-3 rounded-0 rounded-bottom"
                onClick={applyFilters}
              >
                Apply
              </button>
              <button
                className="btn btn-moda w-100 rounded-0 rounded-bottom"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>

          {/* Product display */}
          <div className="col-md-9 shadow-4 border border-top-0 border-bottom-0">
            <div className="row">
              {productData?.products?.map((product, index) => (
                <div className="col-md-4" key={index}>
                  <ProductCard product={product} isLoading={isLoading} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
