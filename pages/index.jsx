import Head from "next/head";
import { Inter } from "next/font/google";
import ServicesSlider from "../Components/partials/Sliders/ServicesSlider.jsx";
import MainSlider from "../Components/partials/Sliders/MainSlider.jsx";
import CategoriesSlider from "../Components/partials/Sliders/CategoriesSlider.jsx";
import BrandSlider from "../Components/partials/Sliders/BrandsSlider.jsx";
import { useProduct } from "../Context/ProductContext.js";
import TrendingNow from "../Components/partials/ProductSliders/TrendingNow.jsx";
import FeaturedFootwear from "../Components/partials/ProductSliders/FeaturedFootwear.jsx";
import BagsAndAccessories from "../Components/partials/ProductSliders/BagsAndAccessories.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { productData } = useProduct();
  console.log(productData.products);
  return (
    <>
      <Head>
        <title>Moda</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesSlider />
      <MainSlider />
      <CategoriesSlider />
      <BrandSlider />
      <div className="bg-light">
        <div className="container">
          <TrendingNow />
        </div>
      </div>
      <div className="container border-bottom">
        <FeaturedFootwear />
      </div>
      <div className="container border-bottom">
        <BagsAndAccessories />
      </div>
    </>
  );
}
