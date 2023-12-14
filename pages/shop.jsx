import React, { useState } from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import ProductCard from "../Components/partials/ProductCard/ProductCard.jsx";
import { useProduct } from "../Context/ProductContext.js";
<<<<<<< Updated upstream
=======
import { useRouter } from "next/router";
import { useCategory } from "../Context/CetegoryContext.js";
>>>>>>> Stashed changes

const Shop = () => {
  const { getProducts, productData, isLoading } = useProduct();
  const { categoryData } = useCategory();
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
<<<<<<< Updated upstream

  const applyFilters = (filters) => {
    const queryParams = Object.entries(filters)
      .map(([key, value]) => {
        return `${value}`;
      })
      .join("&");
    console.log(queryParams);
    getProducts(queryParams); // Make API call with filtered query parameters
=======
  const handleFilter = (filters) => {
    getProducts(
      `searchKey=${filters.searchKey}&price[$gt]=${filters.minPrice}&price[$lt]=${filters.maxPrice}&category=${filters.category}`
    );
    console.log({ filters });
>>>>>>> Stashed changes
  };

  const handleReset = () => {
    setFilters({
      searchKey: "",
<<<<<<< Updated upstream
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
=======
      minPrice: 1,
      maxPrice: 5000,
      category: "",
      subcategory: "",
    });
    handleFilter(" ");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
              <div className="my-2">
                <label htmlFor="search">Search</label>
                <input
                  onChange={(e) =>
                    setFilters({ ...filters, searchKey: e.target.value })
                  }
                  type="search"
                  id="search"
                  className="form-control"
                />
              </div>

              {/* Category dropdown */}
              <div className="my-2">
                <label htmlFor="">Category</label>
                <select
                  className="form-select"
                  onChange={(e) =>
                    setFilters({ ...filters, category: e.target.value })
                  }
                >
                  <option value="">All Categories</option>
                  {categoryData?.categoryList?.map((category) => {
                    const categoryName = category.name
                      .toLowerCase()
                      .replace(/\b\w/g, (char) => char.toUpperCase());
                    return <option value={category.id}>{categoryName}</option>;
                  })}
                </select>
              </div>

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={"price[$gt]=500&price[$lt]=1000"}
                    onChange={(e) => {
                      applyFilters({ ...filters, price: e.target.value });
                      setFilters({ ...filters, price: e.target.value });
                    }}
=======
                    type="range"
                    class="form-range"
                    id="customRange1"
                    min={filters.minPrice}
                    max={5000}
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: e.target.value })
                    }
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
          <div className="col-md-9 shadow-4 border border-top-0 border-bottom-0">
            <div className="row h-100">
              <div>
                <span>Filter</span>
                <span>{filters.category?.categoryList?.name}</span>
              </div>
              {productData.products >= 0 ? (
                <div className="d-flex justify-content-center align-items-center">
                  <p>No Products Found</p>
                </div>
              ) : (
                productData.products?.map((product, index) => (
>>>>>>> Stashed changes
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
