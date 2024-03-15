import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductCard = ({
  product,
  isLoading,
  addToCart,
  isLoadingCart,
  isLoggedIn,
}) => {
  const handleAddCart = (id) => {
    if (isLoggedIn) {
      const token = JSON.parse(localStorage.getItem("userToken"));
      addToCart({ productId: id, quantity: 1 }, token);
    }
  };

  return (
    <>
      {!product || isLoading ? (
        <div className="product-grid m-2">
          <div className="product-image placeholder-glow">
            <div className="imgPlaceHolder w-100 bg-light" />

            <span className="placeholder product-sale-label">
              <i className="fa-solid fa-circle-notch fa-spin"></i>
            </span>

            <span className="placeholder product-discount-label">
              <i className="fa-solid fa-circle-notch fa-spin"></i>
            </span>
          </div>
          <div className="placeholder-glow product-content">
            <ul className="rating">
              <li className={`fas fa-star disable`}></li>
              <li className={`fas fa-star disable`}></li>
              <li className={`fas fa-star disable`}></li>
              <li className={`fas fa-star disable`}></li>
              <li className={`fas fa-star disable`}></li>
            </ul>
            <h4>
              <span className="placeholder col-7"></span>
            </h4>
            <h6>
              <span className="placeholder col-3"></span>{" "}
            </h6>
            <div className="product-button-group">
              <span className="product-like-icon opacity-90">
                <i className="fas fa-heart"></i>
              </span>
              <span className="add-to-cart opacity-90">
                <i className="fa fa-shopping-bag"></i>ADD TO CART
              </span>
              <span className="product-compare-icon opacity-90">
                <i className="fas fa-random"></i>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-grid m-2">
          <div className="product-image">
            <Link href={`/shop/${product.slug}`} className="image">
              <img
                className="pic-1"
                src={product?.mainImage?.secure_url}
                alt="Product Image 1"
              />
              {product.subImages && product.subImages.length > 0 && (
                <img
                  className="pic-2"
                  src={product.subImages[0].secure_url}
                  alt="Product Image 2"
                />
              )}
            </Link>
            {product.top && (
              <span className="product-sale-label">
                {product.top ? "TOP" : ""}
              </span>
            )}
            {product.new && (
              <span className="product-new-label">
                {product.new ? "NEW" : ""}
              </span>
            )}
            {product.discount > 0 ? (
              <span className="product-discount-label">
                -{product.discount}%
              </span>
            ) : null}
          </div>
          <div className="product-content">
            <ul className="rating" title={product.rating}>
              {[...Array(5)].map((_, index) => (
                <li
                  key={index}
                  title={product.rating}
                  className={`fas fa-star${
                    index < product?.rating?.toFixed() ? "" : " disable"
                  }`}
                ></li>
              ))}
            </ul>
            <p className="text-sm m-0">
              {product.categoryId.name.toUpperCase()}
            </p>
            <h2 className="title">
              <Link href={`/shop/${product.slug}`}>
                {product.name.split(" ").slice(0, 3).join(" ") +
                  (product.stock < 10 ? ` (${product.stock})` : "")}
              </Link>
            </h2>
            <div className={`price ${product.discount ? "text-danger" : ""}`}>
              <sup>
                <small className="text-dark">EGP</small>
              </sup>
              {product?.finalPrice?.toFixed()}
              <sup>
                <small>00</small>
              </sup>
              <span>${product.price}</span>
            </div>
            <div className="product-button-group">
              <span className="product-like-icon pointer">
                <i className="fas fa-heart"></i>
              </span>
              {isLoggedIn ? (
                <span
                  className="add-to-cart pointer"
                  onClick={() => {
                    handleAddCart(product._id);
                  }}
                >
                  <i className="fa fa-shopping-bag"></i>
                  ADD TO CART
                </span>
              ) : (
                <Link
                  href={"/login"}
                  className="add-to-cart pointer text-light bg-dark bg-opacity-75"
                >
                  <i className="fa fa-shopping-bag"></i>
                  ADD TO CART
                </Link>
              )}

              <span className="product-compare-icon pointer">
                <i className="fas fa-random"></i>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
