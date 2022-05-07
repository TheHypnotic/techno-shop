import React, { useState, useEffect, Component } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { products, consoleShowcase } from "../static/products";
import { showcaseList } from "../static/showcase-data";
import Slider from "react-slick";
const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countDown, setCountDown] = useState(new Date());
  const [date, setDate] = useState(new Date());

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

  const nextItem = () =>
    setCurrentSlide(
      currentSlide === showcaseList.length - 1 ? 0 : currentSlide + 1
    );
  const prevItem = () =>
    setCurrentSlide(
      currentSlide === 0 ? showcaseList.length - 1 : currentSlide - 1
    );
  useEffect(() => {
    setTimeout(() => {
      nextItem();
    }, 8000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const currentTime = new Date();
      const countDownDate = new Date(
        `${currentTime.getMonth()} ${
          currentTime.getDay() + 5
        }, ${currentTime.getFullYear()} 23:09:59`
      );
      setDate(countDownDate);
      setCountDown(new Date(date - currentTime));
    }, 1000);
  }, [countDown]);
  return (
    <>
      <section id="showcase" className=" container ">
        {showcaseList.map((item, index) => {
          return (
            <div
              key={index}
              className={`carousel-item active-carousel flex ${
                index === currentSlide ? "active-slide" : ""
              }`}
            >
              <div className="carousel-text">
                <h2>{item.h2}</h2>
                <p>{item.detail}</p>
                <button className="btn"> بیشتر &gt;</button>
              </div>
              <img src={item.img} alt="" />
            </div>
          );
        })}
        <div className="carousel-control">
          <div className="chevron-right" onClick={nextItem}>
            <FaChevronRight />
          </div>
          <div className="chevron-left" onClick={prevItem}>
            <FaChevronLeft />
          </div>
        </div>
      </section>

      <section id="top-sales">
        <h2 className="container">پرفروش ترین ها</h2>
        <div className="container flex">
          {products.slice(0, 4).map((item) => {
            return (
              <div key={item.id}>
                <div className="card">
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <p className={`${item.price2 ? "discounted-price" : ""}`}>
                    {item.price2}
                  </p>
                  <p className={`${item.price2 ? "discounted" : ""}`}>
                    {item.price}
                  </p>
                  <button className="btn"> بیشتر &gt;</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="special-offer">
        {products.map((item) => {
          if (item.id === 1) {
            return (
              <div key={item.id} className="container flex">
                <img src={item.img} alt="" />
                <div>
                  <h2>{item.name}</h2>
                  <p className="discounted-price">{item.price2}</p>
                  <p className="discounted">{item.price}</p>
                  <div className="countdown flex">
                    <h3>
                      {countDown.getDay()} روز : {countDown.getHours()} ساعت :{" "}
                      {countDown.getMinutes()}
                      دقیقه : {countDown.getSeconds()} ثانیه
                    </h3>
                  </div>
                  <button className="btn"> بیشتر &gt;</button>
                </div>
              </div>
            );
          }
        })}
      </section>

      <section id="mobile-showcase">
        <div>
          <h2 className="container"> موبایل</h2>
          <Slider {...settings} className="container">
            {products.slice(0, 7).map((item) => {
              return (
                <div key={item.id} className="card">
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <p className={`${item.price2 ? "discounted-price" : ""}`}>
                    {item.price2}
                  </p>
                  <p className={`${item.price2 ? "discounted" : ""}`}>
                    {item.price}
                  </p>
                  <button className="btn">&lt; بیشتر </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      <section id="console-showcase">
        <div>
          <Slider {...settings2} className="container">
            {consoleShowcase.map((item, index) => {
              return (
                <div key={index} className={item.class}>
                  <div className="container flex">
                    <img src={item.Image} alt="" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.paragraph}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      <section id="laptop-showcase">
        <div>
          <h2 className=" container"> لپ تاپ</h2>
          <Slider {...settings} className="container">
            {products.slice(0, 7).map((item) => {
              return (
                <div key={item.id} className="card">
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <p className={`${item.price2 ? "discounted-price" : ""}`}>
                    {item.price2}
                  </p>
                  <p className={`${item.price2 ? "discounted" : ""}`}>
                    {item.price}
                  </p>
                  <button className="btn">&lt; بیشتر </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Homepage;
