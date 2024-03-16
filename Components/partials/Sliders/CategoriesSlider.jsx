import React, { useEffect } from "react";
import Slider from "react-slick";
import { useCategory } from "../../../Context/CetegoryContext.js";
import Link from "next/link.js";

const CategoriesSlider = () => {
  const { categoryData } = useCategory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 770,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };
  return (
    <div className="categorySlider bg-dark mt-n2">
      <div className="container-fluid py-2">
        <div className="row">
          {categoryData?.categoryList?.map((category, index) => {
            return (
              <div
                className="col-4 category d-flex position-relative flex-column align-items-center overflow-hidden"
                key={index}
              >
                <img
                  src={category.image.secure_url}
                  className="img-fluid mb-1 w-100"
                  alt="Category Image"
                  width={150}
                  height={200}
                />
                <div className="layer"></div>
                <Link href={"/shop"}>
                  <button className="btn btn-moda position-absolute top-50 start-50 translate-middle text-uppercase fw-normal p-3 px-4">
                    {category.name}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
