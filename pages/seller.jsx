import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";

const seller = () => {
  return (
    <>
      <PageHeader
        title={"become a Seller"}
        subTitle={"Become a seller with moda now"}
      />
      <div className="container">
        <form className="row p-5 mt-5 border">
          <label htmlFor="name">Personal Information</label>
          <div class="my-4 col-12">
            <input
              type="text"
              id="name"
              class="form-control border"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-4 col-6">
            <input
              type="email"
              id="form4Example2"
              class="form-control border"
              placeholder="Email address"
            />
          </div>
          <div class="mb-4 col-6">
            <input
              type="tel"
              id="form4Example2"
              class="form-control border"
              placeholder="Mobile Number"
            />
          </div>

          <label htmlFor="brand">Vendor Information</label>
          <div class="my-4 col-6">
            <input
              type="text"
              id="brand"
              class="form-control border"
              placeholder="Brand Name"
            />
          </div>
          <div class="my-4 col-6">
            <input
              type="text"
              id="form4Example2"
              class="form-control border"
              placeholder="Address"
            />
          </div>
          <div class="mb-4 col-6">
            <input
              type="text"
              id="form4Example2"
              class="form-control border"
              placeholder="Specification"
            />
          </div>
          <div class="mb-4 col-6">
            <input
              type="email"
              id="form4Example2"
              class="form-control border"
              placeholder="Email address"
            />
          </div>

          <div class="mb-4">
            <textarea
              class="form-control border"
              id="form4Example3"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <div class="form-check d-flex justify-content-center mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              checked
            />
            <label class="form-check-label" for="form4Example4">
              Send me a copy of this message
            </label>
          </div>

          <button type="button" class="btn btn-primary col-3 m-auto">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default seller;
