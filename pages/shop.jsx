import React, { useState, useEffect } from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import ProductCard from "../Components/partials/ProductCard/ProductCard.jsx";
import { useProduct } from "../Context/ProductContext.js";
import { useRouter } from "next/router";

const Shop = () => {
  const router = useRouter();
  const { getProducts, productData, isLoading } = useProduct();

  const [filters, setFilters] = useState({
    searchKey: "",
    minPrice: 1,
    maxPrice: 5000,
    category: "",
    subcategory: "",
  });

  const handleFilter = (filters) => {
    getProducts(
      `searchKey=${filters.searchKey}&price[$gt]=${filters.minPrice}&price[$lt]=${filters.maxPrice}`
    );
    console.log({ filters });
  };

  const handleReset = () => {
    getProducts(" ");
  };

  //https://moda-back-end.vercel.app/product?finalPrice[$gt]=998&&finalPrice[$lt]=9990&colors=blue&

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
          <div className="col-12">
            <img src="/img/bg offer.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-md-3 shadow-4 border border-top-0 border-bottom-0">
            <div className="side py-4 px-2">
              <h4>Filter</h4>
              <div className="my-2">
                <label htmlFor="search">Search</label>
                <input
                  onChange={(e) => getProducts(`searchKey=${e.target.value}`)}
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
                  <option value="">Select Category</option>
                  {/* Populate options dynamically */}
                </select>
              </div>

              {/* Subcategory dropdown */}
              <div className="my-2">
                <label htmlFor="">Subcategory</label>
                <select
                  className="form-select"
                  onChange={(e) =>
                    setFilters({ ...filters, subcategory: e.target.value })
                  }
                >
                  <option value="">Select Subcategory</option>
                  {/* Populate options dynamically */}
                </select>
              </div>

              <div>
                <label class="form-label pt-2 fw-semibold" for="customRange1">
                  Price
                </label>
                <div class="range" data-mdb-range-init>
                  <input
                    type="range"
                    class="form-range"
                    id="customRange1"
                    min={1}
                    max={5000}
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, minPrice: e.target.value })
                    }
                  />
                  <p className="text-sm text-muted mt-n2">
                    Min: {filters.minPrice} EGP
                  </p>
                </div>
                <div class="range" data-mdb-range-init>
                  <input
                    type="range"
                    class="form-range"
                    id="customRange1"
                    min={1}
                    max={5000}
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: e.target.value })
                    }
                  />
                  <p className="text-sm text-muted mt-n2">
                    Max: {filters.maxPrice} EGP
                  </p>
                </div>
              </div>

              <button
                className="btn btn-moda w-100 mt-3 rounded-0 rounded-bottom"
                onClick={handleFilter}
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
