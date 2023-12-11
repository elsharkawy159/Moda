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

  const applyFilters = (filters) => {
    const queryParams = Object.entries(filters)
      .map(([key, value]) => {
        if (value !== "" && value !== false && value !== 0) {
          return `${key}=${value}`;
        }
        return null;
      })
      .filter((query) => query !== null)
      .join("&");
    console.log(queryParams);
    getProducts(queryParams); // Make API call with filtered query parameters
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
      top: false,
      new: false,
      rating: 0,
    }); //Reset
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
          <div className="col-md-3 shadow-4 border border-top-0 border-bottom-0">
            <div className="side py-4 px-2">
              <h4>Filter</h4>
              <div>
                <label className="form-label pt-2 fw-semibold">Price</label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={"&price[$lt]=500"}
                    onChange={(e) => {
                      setFilters({ ...filters, price: e.target.value });
                      applyFilters(filters);
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Under 500EGP
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    500EGP To 1000EGP
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label class="form-check-label" for="flexRadioDefault3">
                    1000EGP To 5000EGP
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label class="form-check-label" for="flexRadioDefault4">
                    +5000EGP
                  </label>
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
              <ul>
                {Object.entries(filters).map(([key, value]) => (
                  <li key={key}>
                    {key}: {JSON.stringify(value)}
                  </li>
                ))}
              </ul>
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
