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
  });

  const handleReset = () => {
    getProducts(""); // Reset products
  };

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
      default:
        break;
    }
    setFilters(updatedFilters);
  };

  const constructQuery = () => {
    const { priceRange, category } = filters;
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

    return query;
  };

  const applyFilters = () => {
    const query = constructQuery();
    console.log(query);
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
          <div className="col-md-3 shadow-4 border border-top-0 border-bottom-0">
            <div className="side py-4 px-2">
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

              <div>
                <label htmlFor="minPrice">Price</label>
                <div className="input-group row m-0">
                  <input
                    type="number"
                    id="minPrice"
                    className="form-control col-6"
                    placeholder="Minimum"
                    name="finalPrice[$gt]"
                    min={1}
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

              <div className="my-3">
                <button
                  className="btn btn-moda w-100 rounded-0 rounded-bottom my-1"
                  onClick={applyFilters}
                >
                  Apply
                </button>

                <button
                  className="btn btn-moda w-100 rounded-0 rounded-bottom my-1"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Product display */}
          <div className="col-md-9 shadow-4 border border-top-0 border-bottom-0">
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
