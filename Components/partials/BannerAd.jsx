import React from "react";
import { Fade } from "react-reveal";

const BannerAd = ({
  height,
  col,
  bg,
  title,
  sub,
  position,
  starts,
  revealDir,
}) => {
  return (
    <Fade
      bottom={revealDir === "bottom"}
      top={revealDir === "top"}
      left={revealDir === "left"}
      right={revealDir === "right"}
    >
      <div className={`${col}`}>
        <div
          className={`bannerAd d-flex align-items-${position} p-4`}
          style={{
            backgroundImage: `url(${bg})`,
            height: `${height}rem`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginBottom: "1rem", // Added margin bottom for gap between components
          }}
        >
          <div className="info z-index">
            <h6
              className={`fw-normal text-uppercase text-light opacity-90 w-fit px-1`}
            >
              {title}
            </h6>
            <h3 className={`fw-bold text-uppercase m-0 text-light`}>{sub}</h3>
            <h5 className={`text-uppercase fw-light text-light opacity-90`}>
              {starts}
            </h5>
            <button
              className={`text-uppercase btn btn-outline-moda text-light fw-bold`}
            >
              discover now
            </button>
          </div>
          <div className="layer"></div>
        </div>
      </div>
    </Fade>
  );
};

export default BannerAd;
