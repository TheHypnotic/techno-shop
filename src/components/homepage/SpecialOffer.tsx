import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TopSalesProps } from "./TopSales";

const SpecialOffer = ({ products }: TopSalesProps) => {
  const [countDown, setCountDown] = useState<Date>(new Date());
  const [date, setDate] = useState<Date>(new Date());

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

  const specialOfferItem = products.find((item) => item.id === 1);
  if (!specialOfferItem) {
    return <div>No special offer available</div>;
  }
  return (
    <section id="special-offer">
      <div key={specialOfferItem.id} className="container flex">
        <img src={specialOfferItem.img} alt="" />
        <div>
          <h2>{specialOfferItem.name}</h2>
          <p className="discounted-price">{specialOfferItem.price2}</p>
          <p className="discounted">{specialOfferItem.price}</p>
          <div className="countdown flex">
            <h3>
              {countDown.getDay()} روز : {countDown.getHours()} ساعت :{" "}
              {countDown.getMinutes()}
              دقیقه : {countDown.getSeconds()} ثانیه
            </h3>
          </div>
          <Link to={`/products/${specialOfferItem.id}`}>
            <button className="btn"> بیشتر &gt;</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
