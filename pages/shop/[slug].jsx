import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProduct } from "../../Context/ProductContext";
import Slider from "react-slick";
import Link from "next/link.js";
import formatKey from "../../Components/features/Formatting.jsx";

const Product = () => {
  const { getProductDetails, productDetailsData } = useProduct();
  const [urlCopied, setUrlCopied] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      getProductDetails(slug);
    }
  }, [slug]);

  const { product } = productDetailsData;
  // console.log(product);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCopyClick = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setUrlCopied(true);
  };

  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="product-grid sticky-top" style={{ top: "20px" }}>
              <div>
                {productDetailsData?.product?.subImages ||
                productDetailsData?.product?.mainImage ? (
                  <Slider {...settings}>
                    {[
                      productDetailsData?.product?.mainImage,
                      ...productDetailsData?.product?.subImages,
                    ].map((image, index) => (
                      <div key={index}>
                        <img src={image?.secure_url} className="img-fluid" />
                      </div>
                    ))}
                  </Slider>
                ) : null}
                {product?.top && (
                  <span className="product-sale-label">
                    {product.top ? "TOP" : ""}
                  </span>
                )}
                {product?.discount && (
                  <span className="product-discount-label">
                    -{product.discount}%
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="productTitle">
              <h4 className="fw-normal mb-0">
                {product?.name}{" "}
                <span
                  className="text-main pointer text-sm"
                  onClick={handleCopyClick}
                  title="Copy URL"
                >
                  {urlCopied ? "Copied " : ""}
                  <i className="fa fa-clone" aria-hidden="true"></i>
                </span>
              </h4>
              <ul className="rating m-0" title={product?.rating}>
                <span className="text-sm">{product?.rating}2 </span>
                {[...Array(5)].map((_, index) => (
                  <li
                    key={index}
                    title="2"
                    className={`fas fa-star${
                      index < 2 || product?.rating?.toFixed(2) ? "" : " disable"
                    }`}
                  ></li>
                ))}
                <span className="text-sm">{product?.rating} (22 Reviews) </span>
              </ul>
            </div>
            <div className="border-bottom my-2"></div>
            <div className="productPrice">
              <span className="text-danger h6">-{product?.discount}% </span>
              <span className="h4 fw-semibold text-dark">
                <sup>
                  <small>EGP</small>
                </sup>
                {product?.finalPrice?.toFixed(2)}
                <sup>
                  <small>00</small>
                </sup>
              </span>
              <p className="text-sm text-muted m-0">
                Was{" "}
                <span
                  className="fw-semibold"
                  style={{ textDecoration: "line-through" }}
                >
                  <small>EGP</small>
                  {product?.price}
                </span>
              </p>
              <p
                style={{ fontSize: "14px" }}
                className="fw-semibold text-dark m-0"
              >
                All prices include VAT.
              </p>
              <div className="border-bottom my-1"></div>
            </div>
            <div className="row flex-column">
              <div className="d-flex justify-content-between my-2">
                <p className="fw-semibold text-sm my-1 text-uppercase">
                  <span className="fw-bold">Brand Name:</span>{" "}
                  {product?.brandId.name}
                </p>
                <p className="fw-semibold text-sm my-1 text-uppercase">
                  <span className="fw-bold">Category:</span>{" "}
                  {product?.subcategoryId.name}
                </p>
                <p className="fw-semibold text-sm my-1 text-uppercase">
                  <span className="fw-bold">Stock:</span> {product?.stock}
                </p>
              </div>
              <p className="fw-semibold">{product?.description}</p>
              <div className="d-flex align-items-center col-md-5 fw-semibold my-2">
                Size:
                <select className="form-select mx-2 text-sm">
                  <option selected>Size</option>
                  {product?.size?.map((size) => {
                    return <option value={size}>{size.toUpperCase()}</option>;
                  })}
                </select>
              </div>
              <div className="d-flex align-items-center col-md-5 fw-semibold my-2">
                Quantity:
                <input
                  min={1}
                  type="number"
                  id="typeNumber"
                  className="form-control mx-2 text-sm"
                  placeholder="1"
                />
              </div>
              <div className="colors fw-semibold my-2 ">
                Colors:
                {product?.colors?.map((color) => {
                  return (
                    <i
                      className="fa fa-circle mx-2 "
                      style={{ color: `${color}`, cursor: "pointer" }}
                    ></i>
                  );
                })}
              </div>
              <button className="btn btn-moda col-md-5 my-3">
                Add To Cart <i className="fa fa-cart-plus"></i>
              </button>

              <div>
                <h3 className="h6">Product Information</h3>
                {product?.attributes?.map((product, index) => (
                  <ul key={index}>
                    {Object.entries(product).map(([key, value]) => (
                      <li key={key}>
                        {typeof value === "object" ? (
                          <div>
                            <p className="fw-semibold text-sm my-1">
                              {formatKey(key)}:
                            </p>
                            <ul>
                              {Object.entries(value).map(
                                ([nestedKey, nestedValue]) => (
                                  <li key={nestedKey} className="text-sm">
                                    {formatKey(nestedKey)}: {nestedValue}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        ) : (
                          <p className="fw-semibold text-sm my-1">
                            {formatKey(key)}:{" "}
                            <span className="fw-normal">{value}</span>
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-12 my-5">
            <ul
              className="nav nav-tabs justify-content-center"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>

              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-4"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-4"
                  role="tab"
                  aria-controls="ex1-tabs-4"
                  aria-selected="false"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  Shipping & Returns
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-3"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-3"
                  role="tab"
                  aria-controls="ex1-tabs-3"
                  aria-selected="false"
                >
                  Reviews (2)
                </a>
              </li>
            </ul>

            <div
              className="tab-content border d-flex justify-content-center p-5"
              id="ex1-content"
            >
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <h6 className="fw-semibold">Product Information</h6>
                <p style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                </p>
                <div className="row align-items-center my-3">
                  <div className="col-md-6">
                    {product?.attributes?.map((product, index) => (
                      <ul key={index}>
                        {Object.entries(product).map(([key, value]) => (
                          <li key={key}>
                            {typeof value === "object" ? (
                              <div>
                                <p className="fw-semibold text-sm my-1">
                                  {formatKey(key)}:
                                </p>
                                <ul>
                                  {Object.entries(value).map(
                                    ([nestedKey, nestedValue]) => (
                                      <li key={nestedKey} className="text-sm">
                                        {formatKey(nestedKey)}: {nestedValue}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            ) : (
                              <p className="fw-semibold text-sm my-1">
                                {formatKey(key)}:{" "}
                                <span className="fw-normal">{value}</span>
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                  <div className="col-md-4">
                    <img
                      src={product?.subImages[2]?.secure_url}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <p style={{ fontSize: "14px", margin: "0" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci.
                </p>
              </div>
              <div
                className="tab-pane fade "
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <h6 className="fw-semibold">Delivery & returns</h6>
                <p style={{ fontSize: "14px", margin: "0px" }}>
                  We deliver to over 100 countries around the world. For full
                  details of the delivery options we offer, please view our
                  <Link href={"/about"}> Delivery information </Link> We hope
                  you’ll love every purchase, but if you ever need to return an
                  item you can do so within a month of receipt. For full details
                  of how to make a return, please view our{" "}
                  <Link href={"/about"}> Returns information</Link>.
                </p>
              </div>
              <div
                className="tab-pane fade "
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tab-3"
              >
                <h6 className="fw-semibold">Reviews (2)</h6>
                <div className="py-3 row border-bottom">
                  <div className="col-md-2 d-flex flex-column align-items-center">
                    <Link href={"/"}>Samanta J.</Link>
                    <ul className="rating m-0" title={product?.rating}>
                      <span className="text-sm">{product?.rating}4 </span>
                      {[...Array(5)].map((_, index) => (
                        <li
                          key={index}
                          title="4"
                          className={`fas fa-star${
                            index < 4 || product?.rating?.toFixed(2)
                              ? ""
                              : " disable"
                          }`}
                        ></li>
                      ))}
                    </ul>{" "}
                    <span className="text-sm text-muted">6 days ago</span>
                  </div>
                  <div className="col-md-10">
                    <span className="fw-semibold">Good, perfect size</span>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus cum dolores assumenda asperiores facilis porro
                      reprehenderit animi culpa atque blanditiis commodi
                      perspiciatis doloremque, possimus, explicabo, autem fugit
                      beatae quae voluptas!
                    </p>
                  </div>
                </div>
                <div className="pt-3 row">
                  <div className="col-md-2 d-flex flex-column align-items-center">
                    <Link href={"/"}>Samanta J.</Link>
                    <ul className="rating m-0" title={product?.rating}>
                      <span className="text-sm">{product?.rating}4 </span>
                      {[...Array(5)].map((_, index) => (
                        <li
                          key={index}
                          title="4"
                          className={`fas fa-star${
                            index < 4 || product?.rating?.toFixed(2)
                              ? ""
                              : " disable"
                          }`}
                        ></li>
                      ))}
                    </ul>{" "}
                    <span className="text-sm text-muted">6 days ago</span>
                  </div>
                  <div className="col-md-10">
                    <span className="fw-semibold">Good, perfect size</span>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus cum dolores assumenda asperiores facilis porro
                      reprehenderit animi culpa atque blanditiis commodi
                      perspiciatis doloremque, possimus, explicabo, autem fugit
                      beatae quae voluptas!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="ex1-tabs-4"
                role="tabpanel"
                aria-labelledby="ex1-tab-4"
              >
                <div className="row gy-4">
                  {productDetailsData?.product?.subImages ||
                  productDetailsData?.product?.mainImage
                    ? [
                        productDetailsData?.product?.mainImage,
                        ...productDetailsData?.product?.subImages,
                      ].map((image, index) => (
                        <div className="col-6" key={index}>
                          <img src={image?.secure_url} className="img-fluid" />
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
