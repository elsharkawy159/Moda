import React, { useState } from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import ProductCard from "../Components/partials/ProductCard/ProductCard.jsx";
import { useProduct } from "../Context/ProductContext.js";
import { useCategory } from "../Context/CetegoryContext.js";

const Shop = () => {
  const { getProducts, productData, isLoading } = useProduct();
  const { categoryData } = useCategory();
  const [filters, setFilters] = useState({
    priceRange: { min: null, max: Infinity },
    category: "",
    colors: "",
    page: 1,
  });

  const colorList = [
    "red",
    "green",
    "yellow",
    "blue",
    "gray",
    "white",
    "black",
  ];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const updatedFilters = { ...filters };
    switch (name) {
      case "finalPrice[$gt]":
        updatedFilters.priceRange.min = parseInt(value);
        break;
      case "finalPrice[$lt]":
        updatedFilters.priceRange.max = parseInt(value);
        break;
      case "categoryId":
        updatedFilters.category = value;
        break;
      case "colors":
        updatedFilters.colors = value;
        break;
      case "page":
        updatedFilters.page =
          value === "Previous" ? filters.page - 1 : filters.page + 1;
        applyFilters();
        break;
      default:
        break;
    }
    setFilters(updatedFilters);
  };

  const constructQuery = () => {
    const { priceRange, category, colors, page } = filters;
    let query = "";
    if (priceRange.min && priceRange.min > 0) {
      query += `finalPrice[$gt]=${priceRange.min}&`;
    }
    if (priceRange.max && priceRange.max < Infinity) {
      query += `finalPrice[$lt]=${priceRange.max}&`;
    }
    if (category) {
      query += `categoryId=${category}&`;
    }
    if (colors) {
      query += `colors=${colors}&`;
    }
    if (page) {
      query += `page=${productData.page + 1}&`;
    }
    return query;
  };

  const applyFilters = () => {
    const query = constructQuery();
    console.log(query);
    console.log(filters);
    getProducts(query);
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
          <div className="col-md-3 border border-top-0">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="side py-4 px-2"
            >
              <h4>Filter</h4>

              <div className="my-2">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  className="form-select"
                  onChange={handleFilterChange}
                  name="categoryId"
                >
                  <option value="">All Categories</option>
                  {categoryData?.categoryList?.map((category) => {
                    const categoryName = category.name
                      .toLowerCase()
                      .replace(/\b\w/g, (char) => char.toUpperCase());
                    return (
                      <option key={category.id} value={category.id}>
                        {categoryName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="my-2">
                <label htmlFor="minPrice">Price</label>
                <div className="input-group row m-0">
                  <input
                    type="number"
                    id="minPrice"
                    className="form-control col-6"
                    placeholder="Minimum"
                    name="finalPrice[$gt]"
                    min={1}
                    value={filters.priceRange.min}
                    onInput={handleFilterChange}
                  />
                  <input
                    type="number"
                    className="form-control col-6"
                    placeholder="Maximum"
                    name="finalPrice[$lt]"
                    min={1}
                    max={Infinity}
                    onInput={handleFilterChange}
                  />
                </div>
              </div>

              <div className="my-2">
                <label htmlFor="colors" className="d-block">
                  Colors
                </label>
                {colorList.map((color, index) => {
                  return (
                    <div class="form-check form-check-inline">
                      <input
                        key={index}
                        class="form-check-input d-flex justify-content-center align-items-center"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: `${color}`,
                        }}
                        type="radio"
                        onChange={handleFilterChange}
                        name="colors"
                        id="inlineRadio3"
                        value={color}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="my-3">
                {isLoading ? (
                  <button
                    className="btn btn-moda w-100 rounded-0 rounded-bottom my-1"
                    disabled
                  >
                    <i class="fa-solid fa-spinner fa-spin fs-2 text-main"></i>
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-moda w-100 rounded-0 rounded-bottom my-1"
                      onClick={applyFilters}
                    >
                      Apply
                    </button>
                    <button
                      className="btn btn-moda w-100 rounded-0 rounded-bottom my-1"
                      onClick={() => window.location.reload()}
                    >
                      Reset
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>

          {/* Product display */}
          <div className="col-md-9 border-bottom">
            <div className="row">
              <select
                id="category"
                className="form-select w-25 m-3 mb-0"
                onChange={handleFilterChange}
                name="sort"
              >
                <option value="">Sorting</option>
                <option value="">A - Z</option>
                <option value="">Z - A</option>
                <option value="">Price - Low to High</option>
                <option value="">Price - High to Low</option>
              </select>
            </div>
            <div className="row h-100 align-items-center text-center pb-5">
              {productData.productsCount === 0 ? (
                <h3 className="text-muted fw-light">
                  No Products Found <i class="fa-solid fa-ban"></i>
                </h3>
              ) : (
                productData?.products?.map((product, index) => (
                  <div className="col-md-4" key={index}>
                    <ProductCard product={product} isLoading={isLoading} />
                  </div>
                ))
              )}
              <nav
                className="d-flex justify-content-center border-top pt-2"
                aria-label="Page navigation example"
              >
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className="page-link"
                      onClick={handleFilterChange}
                      name="page"
                      href="#"
                      aria-label="Previous"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <span className="page-link" style={{ cursor: "default" }}>
                      {productData.page || 1}
                    </span>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      onClick={handleFilterChange}
                      name="page"
                      href="#"
                      aria-label="Next"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
