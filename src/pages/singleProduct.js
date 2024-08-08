import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../static/products";
import { actions } from "../redux/cart";
import { useSelector, useDispatch } from "react-redux";

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartlist);

  const isInCart = cartList.some((item) => item.id == productId);

  const addItem = (item) => {
    dispatch(actions.addItem(item));
  };
  const removeItemCompletely = (item) => {
    dispatch(actions.removeItemCompletely(item));
  };

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

                    <button
                      className="btn add-to-cart"
                      onClick={() => addItem(item)}
                    >
                      اضافه به سبد خرید
                    </button>
                    {isInCart && (
                      <button
                        className="btn remove-from-cart"
                        onClick={() => removeItemCompletely(item)}
                      >
                        حذف از سبد خرید
                      </button>
                    )}
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
