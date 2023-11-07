import React from "react";
import Slider from "react-slick";

const ServicesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-dark">
      <div className="container py-2">
        <Slider {...settings}>
          <div className="d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-rocket me-3 text-secondary fs-4"></i>
            <div className="info d-flex flex-column">
              <strong className="m-0 text-light text-sm">FREE SHIPPING</strong>
              <span className="text-sm m-0 text-white-50">
                Orders $50 or more
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-arrow-rotate-left me-3 text-secondary fs-4"></i>
            <div className="info d-flex flex-column">
              <strong className="m-0 text-light text-sm">FREE SHIPPING</strong>
              <span className="text-sm m-0 text-white-50">
                Orders $50 or more
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-percent me-3 text-secondary fs-4"></i>
            <div className="info d-flex flex-column">
              <strong className="m-0 text-light text-sm">FREE SHIPPING</strong>
              <span className="text-sm m-0 text-white-50">
                Orders $50 or more
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-phone me-3 text-secondary fs-4"></i>
            <div className="info d-flex flex-column">
              <strong className="m-0 text-light text-sm">FREE SHIPPING</strong>
              <span className="text-sm m-0 text-white-50">
                Orders $50 or more
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSlider;
