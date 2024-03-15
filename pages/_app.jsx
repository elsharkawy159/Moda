import Layout from "../Components/Layout.js";
import TopBarProgress from "react-topbar-progress-indicator";
import { CategoryProvider } from "../Context/CetegoryContext.js";
import { AuthProvider } from "../Context/AuthContext.js";
import { BrandProvider } from "../Context/BrandContext.js";
import { CartProvider } from "../Context/CartContext.js";
import { CouponProvider } from "../Context/CouponsContext.js";
import { OrderProvider } from "../Context/OrderContext.js";
import { ProductProvider } from "../Context/ProductContext.js";
import { ReviewProvider } from "../Context/ReviewsContext.js";
import { SubcategoryProvider } from "../Context/SubCategoryContext.js";
import { Router } from "next/router.js";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/mediaQuery.css";
import "../public/Components.style/style.css";
import "react-image-crop/dist/ReactCrop.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(false);

  TopBarProgress.config({
    barColors: {
      0: "#ffd4c1",
      0.5: "#f89a72",
      "1.0": "#ff763b",
    },
    shadowBlur: 1,
  });
  Router.events.on("routeChangeStart", () => {
    setProgress(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
  });

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrandProvider>
            <CategoryProvider>
              <CouponProvider>
                <OrderProvider>
                  <ProductProvider>
                    <ReviewProvider>
                      <SubcategoryProvider>
                        <Layout>
                          {progress && <TopBarProgress />}
                          <Component {...pageProps} />
                        </Layout>
                      </SubcategoryProvider>
                    </ReviewProvider>
                  </ProductProvider>
                </OrderProvider>
              </CouponProvider>
            </CategoryProvider>
          </BrandProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}
