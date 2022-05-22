import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../static/products";

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      {products.map((item, index) => {
        if (item.id == productId) {
          return (
            <section key={index} id="single-product">
              <div className="container gb-btn-container">
                <button className="btn gb-btn " onClick={() => navigate(-1)}>
                  بازگشت
                </button>
              </div>
              <div className="container flex">
                <img src={item.img} alt="" />
                <div className="single-product-detail">
                  <h2>{item.name}</h2>
                  <p>{item.detail}</p>
                </div>
                <div className="add-cart-container">
                  <p className={`${item.price2 ? "discounted-price" : ""}`}>
                    {item.price2} تومان
                  </p>
                  <p className={`${item.price2 ? "discounted" : ""}`}>
                    {item.price} تومان
                  </p>

                  <button className="btn add-to-cart">اضافه به سبد خرید</button>
                </div>
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default SingleProduct;
