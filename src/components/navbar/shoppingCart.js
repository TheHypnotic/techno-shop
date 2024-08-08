import { faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import ShoppingCartItem from "./shoppingCartItem";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/cart";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartlist);

  const addItem = (id) => {
    dispatch(actions.addItem(id));
  };
  const removeItem = (id) => {
    dispatch(actions.removeItem(id));
  };

  useEffect(() => {
    const cartIcon = document.querySelector("#cartIcon");
    const shoppingCartElement = document.querySelector("#shopping-cart");
    const crossIcon = document.querySelector(".cartCross");

    const showCart = () => {
      shoppingCartElement.classList.add("d-block");
    };

    const hideCart = () => {
      shoppingCartElement.classList.remove("d-block");
    };
    cartIcon.addEventListener("click", showCart);
    crossIcon.addEventListener("click", hideCart);

    return () => {
      cartIcon.removeEventListener("click", showCart);
      crossIcon.removeEventListener("click", hideCart);
    };
  }, []);

  return (
    <section id="shopping-cart" className="d-none">
      <div id="shopping-cart-container">
        <div className="cartTitle flex">
          <h2>Cart</h2>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="cartCross">
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="cartlist">
          {/*should be a component  */}
          <table>
            <thead>
              <tr>
                <th>عکس</th>
                <th>کالا</th>
                <th>تعداد</th>
                <th>قیمت</th>
                <th>قیمت کل</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item) => {
                return (
                  <ShoppingCartItem
                    key={item.id}
                    item={item}
                    onAdd={addItem}
                    onRemove={removeItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
