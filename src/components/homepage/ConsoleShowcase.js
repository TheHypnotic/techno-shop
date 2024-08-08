import React from "react";
import Slider from "react-slick";

const ConsoleShowcase = ({ consoleShowcase, settings }) => {
  return (
    <section id="console-showcase">
      <div>
        <Slider {...settings} className="container">
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
  );
};

export default ConsoleShowcase;
