import React from 'react'
import PageHeader from '../Components/partials/PageHeader.jsx'
import BannerAd from '../Components/partials/BannerAd.jsx';

const about = () => {
  return (
    <>
      <PageHeader title={"about us"} subTitle={"Know more about MODA"} />
      <div className="vh-100">
        <BannerAd
          height={29}
          col={"col-lg-3 col-md-6 col-12"}
          bg={"/img/mainSlider/slide-5.jpg"}
          title={"New Arrivals"}
          sub={"WaterProof"}
          position={"end"}
          starts={"From $19.99"}
          color={"text-dark"}
        />
      </div>
    </>
  );
}

export default about