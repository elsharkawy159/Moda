import React from 'react'
import PageHeader from '../Components/partials/PageHeader.jsx'
import BannerAd from '../Components/partials/BannerAd.jsx';

const about = () => {
  return (
    <>
      <PageHeader title={"about us"} subTitle={"Know more about MODA"} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className='text-main'>Who We Are?</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              voluptatem fuga necessitatibus asperiores ad molestiae quasi, sunt
              ratione voluptate vero. Ad blanditiis aliquam ab harum odio facere
              nihil. Minima, aliquid. Maiores nihil ad deserunt a ipsum
              laboriosam corrupti veniam quasi. Commodi optio quaerat expedita
              ipsam repudiandae perferendis amet explicabo aliquam?
            </p>
          </div>
          <div className="col-md-6">
            <img src="/img/mainSlider/slide-12.jpg" className='w-100' alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default about