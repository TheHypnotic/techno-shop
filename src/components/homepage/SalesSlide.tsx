import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Product } from "../navbar";
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed?: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  arrows?: boolean;
  rtl?: boolean;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      infinite?: boolean;
      dots?: boolean;
      initialSlide?: number;
    };
  }>;
}
interface SalesSlideProps {
  tag: string;
  title: string;
  products: Product[];
  settings: SliderSettings;
  category: string;
}

const SalesSlide: React.FC<SalesSlideProps> = ({
  tag,
  title,
  products,
  settings,
  category,
}) => {
  const productsInCategory = products.filter(
    (item) => item.category === category
  );

  return (
    <section id={`${tag}-showcase`}>
      <div>
        <h2 className="container">{title}</h2>
        <Slider {...settings} className="container">
          {productsInCategory.slice(0, 7).map((item) => {
            return (
              <div key={item.id} className="card">
                <Link to={`/products/${item.id}`}>
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <p className={`${item.price2 ? "discounted-price" : ""}`}>
                    {item.price2}
                  </p>
                  <p className={`${item.price2 ? "discounted" : ""}`}>
                    {item.price}
                  </p>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SalesSlide;
