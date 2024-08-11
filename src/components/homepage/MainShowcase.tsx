import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ShowcaseItem {
  h2: string;
  detail: string;
  img: string;
}
interface MainShowcaseProps {
  showcaseList: ShowcaseItem[];
}

const MainShowcase = ({ showcaseList }: MainShowcaseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  return (
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
  );
};

export default MainShowcase;
