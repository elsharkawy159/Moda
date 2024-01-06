import React, { useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link.js";
import { useBrand } from "../../../Context/BrandContext.js";

const BrandSlider = () => {
  const { brandData } = useBrand();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="container py-3">
        <Slider {...settings}>
          {brandData?.brandList?.map((brand, index) => {
            return (
              <Link
                className="d-flex flex-column align-items-center"
                href={"/"}
                key={index}
              >
                <img
                  src={brand.image.secure_url}
                  className="img-fluid rounded-circle mb-1 opacity-70 hvrOpacity"
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlider;
