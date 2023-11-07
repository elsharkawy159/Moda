import React from "react";

const CallToAction = () => {
  return (
    <>
      <div className="container py-5 d-flex flex-column align-items-center">
        <h2 className="h5 m-0">Sign Up for updates from MODA</h2>
        <p className="text-muted text-sm">
          and receive $20 coupon for first shopping
        </p>
        <div className="col-md-6">
          <div className="input-group">
            <input
              autoComplete="off"
              type="text"
              className="form-control rounded px-3 rounded-0"
              placeholder="Enter your Email Address"
              onInput={(e) => console.log(e.target.value)}
            />
            <button type="button" className="btn btn-moda px-3">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
