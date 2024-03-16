import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";

const contact = () => {
  return (
    <>
      <PageHeader title={"contact us"} subTitle={"Chat with us 24/7."} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/img/contact.jpg" className="img-fluid" alt="img" />
          </div>
          <div className="col-md-6">
            <form className="w-100">
              <div className="mb-4">
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control border"
                  placeholder="Name"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control border"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control border"
                  id="form4Example3"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                  checked
                />
                <label className="form-check-label" for="form4Example4">
                  Send me a copy of this message
                </label>
              </div>

              <button type="button" className="btn btn-moda btn-block mb-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
