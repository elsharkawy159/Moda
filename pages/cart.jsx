import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/partials/PageHeader";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import { MDBInput } from "mdb-react-ui-kit";

const Cart = () => {
  const { isLoggedIn } = useAuth();
  const {
    cartData,
    getUserCart,
    deleteFromCart,
    isLoadingCart,
    addToCart,
    clearCart,
  } = useCart();

  const [voucher, setVoucher] = useState("Omar100");
  const [discounted, setDiscounted] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      getUserCart(JSON.parse(localStorage.getItem("userToken")));
    }
  }, [isLoggedIn]);

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
            <div className="h-100">
              <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>{" "}
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
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
                    {cartData?.cart?.products?.length === 0 ? (
                      <div className="text-center fw-medium py-5 shadow-sm my-4">
                        Empty Cart
                      </div>
                    ) : (
                      cartData?.cart?.products?.map((product, i) => (
                        <div
                          className="card rounded-3 mb-4 hover-zoom hover-shadow-soft shadow-2"
                          key={i}
                        >
                          <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <Link href={`/shop/${product.productId.slug}`}>
                                  <img
                                    src={product.productId.mainImage.secure_url}
                                    className="img-fluid rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </Link>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <Link
                                  href={`/shop/${product.productId.slug}`}
                                  className="lead fw-normal mb-2 fs-6 py-1"
                                >
                                  {product.productId.name}
                                </Link>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  className="btn btn-link px-2"
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
                                  min="0"
                                  name="quantity"
                                  type="number"
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
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 className="mb-0">
                                  <sup>
                                    <small className="text-dark">EGP</small>
                                  </sup>
                                  {(
                                    product.productId.finalPrice *
                                    product.quantity
                                  ).toFixed(2)}
                                </h5>
                              </div>
                              <div
                                className="col-md-1 col-lg-1 col-xl-1 text-end"
                                onClick={() =>
                                  deleteFromCart(
                                    { productIds: [product.productId._id] },
                                    JSON.parse(
                                      localStorage.getItem("userToken")
                                    )
                                  )
                                }
                              >
                                {isLoadingCart ? (
                                  <i class="fa-solid fa-xl text-danger fa-spinner fa-spin"></i>
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

                    <div class="card mb-4">
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
                            label="Voucher Code"
                            value={voucher}
                            onChange={(e) => setVoucher(e.target.value)}
                          />
                        </div>
                        <button
                          type="button"
                          class={`btn btn-lg ms-3 ${
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

                    <div className="card p-3">
                      <div className="card-body text-center">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Quantity</th>
                              <th>Price (EGP)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartData?.cart?.products?.map((product, index) => (
                              <tr key={index}>
                                <td>{product.productId.name}</td>
                                <td>{product.quantity}</td>
                                <td>
                                  {product.productId.finalPrice.toFixed(2)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="d-flex justify-content-between">
                          <div className="amount">
                            <h5>Amount</h5>
                            <h5 className="fw-600">
                              <sup>
                                <small className="text-dark">EGP</small>
                              </sup>{" "}
                              {cartData?.cart?.products
                                ?.reduce(
                                  (total, product) =>
                                    total +
                                    product.quantity *
                                      product.productId.finalPrice,
                                  0
                                )
                                .toFixed(2)}
                            </h5>
                          </div>
                          <div className="delivery">
                            <h5>Delivery</h5>
                            <h5 className="fw-600">
                              <sup>
                                <small>EGP</small>
                              </sup>{" "}
                              20
                            </h5>
                          </div>
                          <div className="vat">
                            <h5>Fees</h5>
                            <h5 className="fw-600">%14</h5>
                          </div>
                          {discounted && (
                            <div className="discount">
                              <h5>Discount</h5>
                              <h5 className="text-danger fw-600">
                                <sup>
                                  <small>EGP</small>
                                </sup>{" "}
                                100
                              </h5>
                            </div>
                          )}
                          <div className="total">
                            <h5>Total</h5>
                            <h5 className="fw-600">
                              <sup>
                                <small className="text-dark">EGP</small>
                              </sup>{" "}
                              {(
                                cartData?.cart?.products?.reduce(
                                  (total, product) =>
                                    total +
                                    product.quantity *
                                      product.productId.finalPrice,
                                  0
                                ) *
                                  1.14 +
                                20
                              ).toFixed(2)}
                            </h5>
                          </div>
                          {discounted && (
                            <div className="discounted">
                              <h5>Final Amount</h5>
                              <h5 className="fw-600 text-success">
                                <sup>
                                  <small>EGP</small>
                                </sup>{" "}
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
                                  .toFixed(2)}
                              </h5>
                            </div>
                          )}
                        </div>
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
