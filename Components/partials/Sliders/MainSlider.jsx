import React from "react";
import Slider from "react-slick";

const MainSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    speed: 700,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="main-slider">
      <Slider {...settings}>
        <div className="position-relative">
          <img
            src="./img/mainSlider/slide-2.jpg"
            alt="Slider"
            className="w-100 border-0"
          />
          <div className="slider-content text-center">
            <p className="text-gradient">NEW COLLECTION</p>
            <h1>Men's Coats & Jackets</h1>
            <button className="btn btn-moda fs-6 m-0 fw-bold">
              Discover Now
            </button>
          </div>
        </div>
        <div className="position-relative">
          <img
            src="img/mainSlider/slide-1.jpg"
            alt="Slider"
            className="w-100 border-0"
          />
          <div className="slider-content text-center">
            <p className="text-gradient">NEW COLLECTION</p>
            <h1>
              Men's & Women's <span className="d-block">T-Shirts</span>
            </h1>
            <button className="btn btn-moda fs-6 m-0">Discover Now</button>
          </div>
        </div>
        <div className="position-relative">
          <img
            src="img/mainSlider/slide-3.jpg"
            alt="Slider"
            className="w-100 border-0"
          />
          <div className="slider-content text-center">
            <p className="text-gradient">DEALS AND PROMOTIONS</p>
            <h1>Sneakers & Athletic Shoes</h1>
            <button className="btn btn-moda fs-6 m-0">Discover Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
