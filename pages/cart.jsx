import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/partials/PageHeader";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import { MDBInput } from "mdb-react-ui-kit";
import BagsAndAccessories from "../Components/partials/ProductSliders/BagsAndAccessories.jsx";

const Cart = () => {
  const { isLoggedIn } = useAuth();
  const { cartData, deleteFromCart, isLoadingCart, addToCart, clearCart } =
    useCart();

  const [voucher, setVoucher] = useState("Omar100");
  const [discounted, setDiscounted] = useState(false);

  return (
    <>
      <PageHeader title={"My Cart"} />
      <div className="container">
        <div className="row py-5">
          {!isLoggedIn ? (
            <Link href={"/login"} className="m-auto col-md-3">
              <button className="btn btn-moda w-100">Sign In</button>
            </Link>
          ) : (
            <div className="h-100 py-0 px-0 ">
              <div className="row d-flex justify-content-center h-100">
                <div className="col-md-6">
                  {cartData?.cart?.products?.length === 0 ? (
                    <div className="text-center fw-medium py-5 shadow-sm mb-4 border">
                      Empty Cart
                    </div>
                  ) : (
                    cartData?.cart?.products?.map((product, i) => (
                      <div
                        className="card  rounded-3 mb-3 p-0 hover-zoom hover-shadow-soft shadow-2 row col-md-12 border col-6"
                        key={i}
                      >
                        <div className="card-body p-4 ">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-12">
                              <Link
                                href={`/shop/${product.productId.slug}`}
                                className="w-100"
                              >
                                <img
                                  src={product.productId.mainImage.secure_url}
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </Link>
                            </div>
                            <h6 className="col-md-3">
                              <Link
                                href={`/shop/${product.productId.slug}`}
                                className="lead fw-normal mb-2 fs-6 py-1"
                              >
                                {product.productId.name}
                              </Link>
                            </h6>
                            <div className="col-md-3 col-lg-3 d-flex">
                              <button
                                className="btn btn-link px-2"
                                disabled={product.quantity === 1}
                                onClick={() =>
                                  addToCart(
                                    {
                                      productId: product.productId._id,
                                      quantity: product.quantity - 1,
                                    },
                                    JSON.parse(
                                      localStorage.getItem("userToken")
                                    )
                                  )
                                }
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                id="form1"
                                min={1}
                                name="quantity"
                                type="text"
                                disabled
                                value={product.quantity}
                                className="form-control text-center fw-600"
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={() =>
                                  addToCart(
                                    {
                                      productId: product.productId._id,
                                      quantity: product.quantity + 1,
                                    },
                                    JSON.parse(
                                      localStorage.getItem("userToken")
                                    )
                                  )
                                }
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-2 offset-xl-1">
                              <h6 className="mb-0">
                                <sup>
                                  <small className="text-dark">EGP</small>
                                </sup>
                                {(
                                  product.productId.finalPrice *
                                  product.quantity
                                ).toFixed()}
                              </h6>
                            </div>
                            <div
                              className="col-md-1 text-end"
                              onClick={() =>
                                deleteFromCart(
                                  { productIds: [product.productId._id] },
                                  JSON.parse(localStorage.getItem("userToken"))
                                )
                              }
                            >
                              {isLoadingCart ? (
                                <div
                                  class="spinner-border text-danger"
                                  role="status"
                                >
                                  <span class="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              ) : (
                                <a href="#!" className="text-danger">
                                  <i className="fas fa-trash fa-xl"></i>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  <div className="mt-3">
                    {cartData?.cart?.products?.length > 0 && (
                      <div>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() =>
                            clearCart(
                              JSON.parse(localStorage.getItem("userToken"))
                            )
                          }
                        >
                          Clear Cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="card mb-4 border shadow-3">
                    <div class="card-body p-4 d-flex flex-row">
                      <div class="form-outline flex-fill">
                        <MDBInput
                          className={`form-control form-control-lg ${
                            voucher == "Omar100"
                              ? "text-success"
                              : "text-danger"
                          } `}
                          id="voucher"
                          name="voucher"
                          label="Promo Code"
                          value={voucher}
                          onChange={(e) => setVoucher(e.target.value)}
                        />
                      </div>
                      <button
                        type="button"
                        class={`btn btn-lg ms-3 px-5 ${
                          discounted ? "btn-success" : "btn-outline-warning"
                        }`}
                        onClick={
                          voucher === "Omar100"
                            ? () => setDiscounted(true)
                            : null
                        }
                      >
                        {discounted ? "Applied" : "Apply"}
                      </button>
                    </div>
                    {discounted && (
                      <p
                        className="text-danger ms-5 pointer w-fit"
                        onClick={() => setDiscounted(false)}
                      >
                        Cancel Discount
                      </p>
                    )}
                  </div>

                  <div className="card p-3 border shadow-3">
                    <div className="card-body text-center">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              Products({cartData?.cart?.products?.length})
                            </th>
                            <th>
                              Quantity(
                              {cartData?.cart?.products?.reduce(
                                (total, product) => total + product.quantity,
                                0
                              )}
                              )
                            </th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartData?.cart?.products?.map((product, index) => (
                            <tr key={index}>
                              <td>{product.productId.name}</td>
                              <td>{product.quantity}</td>
                              <td>{product.productId.finalPrice.toFixed()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="amount d-flex justify-content-between">
                        <h6>Amount</h6>
                        <h6 className="fw-600">
                          EGP{" "}
                          {cartData?.cart?.products
                            ?.reduce(
                              (total, product) =>
                                total +
                                product.quantity * product.productId.finalPrice,
                              0
                            )
                            .toFixed() || 0}
                        </h6>
                      </div>
                      <div className="delivery d-flex justify-content-between">
                        <h6>Shipping</h6>
                        <h6 className="fw-600">EGP 20</h6>
                      </div>
                      <div className="vat d-flex justify-content-between">
                        <h6>Fees</h6>
                        <h6 className="fw-600">%14</h6>
                      </div>
                      {discounted && (
                        <div className="discount d-flex justify-content-between">
                          <h6>Discount</h6>
                          <h6 className="text-danger fw-600">EGP 100</h6>
                        </div>
                      )}
                      <div className="total d-flex justify-content-between">
                        <h6>Total</h6>
                        <h6 className="fw-600">
                          EGP{" "}
                          {cartData?.cart?.products
                            ? (
                                cartData?.cart?.products?.reduce(
                                  (total, product) =>
                                    total +
                                    product.quantity *
                                      product.productId.finalPrice,
                                  0
                                ) *
                                  1.14 +
                                20
                              ).toFixed()
                            : 0}
                        </h6>
                      </div>
                      {discounted && (
                        <div className="discounted d-flex justify-content-between">
                          <h6>Final Amount</h6>
                          <h6 className="fw-600 text-success">
                            EGP{" "}
                            {(
                              cartData?.cart?.products?.reduce(
                                (total, product) =>
                                  total +
                                  product.quantity *
                                    product.productId.finalPrice,
                                0
                              ) *
                                1.14 - // Add 14% VAT
                              100 +
                              20
                            ) // Subtract 50 pounds discount
                              .toFixed() || 0}
                          </h6>
                        </div>
                      )}
                      <button
                        type="button"
                        className="btn btn-moda btn-block btn-lg mt-4"
                      >
                        Proceed to Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <BagsAndAccessories />
      </div>
    </>
  );
};

export default Cart;
