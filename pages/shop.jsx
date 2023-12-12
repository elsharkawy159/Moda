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
    top: "",
    new: "",
    rating: "",
  });

  const applyFilters = (filters) => {
    const queryParams = Object.entries(filters)
      .map(([key, value]) => {
        return `${value}`;
      })
      .join("&");
    console.log(queryParams);
    getProducts(queryParams); // Make API call with filtered query parameters
  };

  const handleReset = () => {
    setFilters({
      searchKey: "",
      category: "",
      subcategory: "",
      price: "", // Updated max price to 5000
      color: "",
      size: "",
      brand: "",
      top: "",
      new: "",
      rating: "",
    }); //Reset
    getProducts(""); // Reset products
  };
  const testConsole = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
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
                <div className="input-group row p-0">
                  <input
                    type="number"
                    className="form-control col-6"
                    placeholder="Minimum"
                    name="&price[$gt]="
                    onInput={testConsole}
                  />
                  <input
                    type="number"
                    className="form-control col-6"
                    placeholder="Maximum"
                    name="&price[$lt]="
                    min={filters.priceRange.min}
                    onInput={testConsole}
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={"price[$gt]=500&price[$lt]=1000"}
                    onChange={(e) => {
                      applyFilters({ ...filters, price: e.target.value });
                      setFilters({ ...filters, price: e.target.value });
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    500 To 1000
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    value={"price[$gt]=1000&price[$lt]=5000"}
                    onChange={(e) => {
                      applyFilters({ ...filters, price: e.target.value });
                      setFilters({ ...filters, price: e.target.value });
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault3">
                    1000 To 5000
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    value={"price[$gt]=5000"}
                    onChange={(e) => {
                      applyFilters({ ...filters, price: e.target.value });
                      setFilters({ ...filters, price: e.target.value });
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault4">
                    +5000
                  </label>
                </div>
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

          {/* Product display */}
          <div className="col-md-9 shadow-4 border border-top-0 border-bottom-0">
            <ul className="d-flex text-decoration-none">
              {Object.entries(filters).map(([key, value]) =>
                value === "" ? null : (
                  <li className="mx-1 bg-main rounded-5" key={key}>
                    {JSON.stringify(value)}
                  </li>
                )
              )}
            </ul>
            <div className="row text-center">
              {productData.productsCount === 0 ? (
                <h3>No Products Found</h3>
              ) : (
                productData?.products?.map((product, index) => (
                  <div className="col-md-4" key={index}>
                    <ProductCard product={product} isLoading={isLoading} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
