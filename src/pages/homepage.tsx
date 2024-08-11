import React from "react";
import { products, consoleShowcase } from "../static/products";
import { showcaseList } from "../static/showcase-data";
import SalesSlide from "../components/homepage/SalesSlide";
import MainShowcase from "../components/homepage/MainShowcase";
import TopSales from "../components/homepage/TopSales";
import SpecialOffer from "../components/homepage/SpecialOffer";
import ConsoleShowcase from "../components/homepage/ConsoleShowcase";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 672,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    arrows: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <>
      <MainShowcase showcaseList={showcaseList} />
      <TopSales products={products} />
      <SpecialOffer products={products} />
      <SalesSlide
        products={products}
        settings={settings}
        category={"phone"}
        tag={"mobile"}
        title={"موبایل"}
      />
      <ConsoleShowcase consoleShowcase={consoleShowcase} settings={settings2} />
      <SalesSlide
        products={products}
        settings={settings}
        category={"laptop"}
        tag={"laptop"}
        title={"لپ تاپ"}
      />
    </>
  );
};

export default Homepage;
