import React from "react";
import PageHeader from "../Components/partials/PageHeader.jsx";
import BannerAd from "../Components/partials/BannerAd.jsx";

const shop = () => {
  return (
    <>
      <PageHeader
        title={"Shop"}
        subTitle={
          "Offering a world-class customer experience, MODA is the top choice for online shopping in Egypt."
        }
      />
      <div className="vh-100">
        <div className="container">
          <div className="row g-3">
            <BannerAd
              height={29}
              col={"col-lg-3 col-md-6 col-12"}
              bg={"/img/mainSlider/slide-5.jpg"}
              title={"New Arrivals"}
              sub={"WaterProof"}
              position={"end"}
              starts={"From $19.99"}
              color={"text-dark"}
              revealDir={"left"}
            />
            <div className="col-md-6">
              <BannerAd
                height={14}
                col={"col-12"}
                bg={"/img/mainSlider/slide-6.jpg"}
                title={"Limited Time Offer"}
                sub={"Special Discounts"}
                position={"center"}
                starts={"From $19.99"}
                color={"text-dark"}
                revealDir={"top"}
              />
              <BannerAd
                height={14}
                col={"col-12"}
                bg={"/img/mainSlider/slide-7.jpg"}
                title={"Limited Time Offer"}
                sub={"Special Discounts"}
                position={"center"}
                starts={"From $19.99"}
                revealDir={"bottom"}
              />
            </div>
            <BannerAd
              height={29}
              col={"col-lg-3 col-md-6 col-12"}
              bg={"/img/mainSlider/slide-8.jpg"}
              title={"Free Shipping"}
              sub={"On All Orders"}
              position={"top"}
              starts={"From $19.99"}
              revealDir={"right"}
            />
          </div>      
        </div>
      </div>
    </>
  );
};

export default shop;
