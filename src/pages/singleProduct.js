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
              <div className="single-product-container">
                <div className="container flex ">
                  <img src={item.BigImg} alt="" />
                  <div className="title">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="add-cart-container">
                    <p
                      className={`${
                        item.price2 ? "discounted-price" : "d-none"
                      }`}
                    >
                      {item.price2} تومان
                    </p>
                    <p className={`${item.price2 ? "discounted" : "price"}`}>
                      {item.price} تومان
                    </p>

                    <button className="btn add-to-cart">
                      اضافه به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
              <div className="container detail">
                <h3>معرفی</h3>
                <p>{item.detail}</p>
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default SingleProduct;
