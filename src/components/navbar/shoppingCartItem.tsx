import React from "react";
import { CartItem } from "../../types/types";

interface ShoppingCartItemProp {
  item: CartItem;
  onAdd: (id: CartItem) => void;
  onRemove: (id: CartItem) => void;
}
const ShoppingCartItem = ({ item, onAdd, onRemove }: ShoppingCartItemProp) => {
  return (
    <tr>
      <td className="cart-item">
        <img src={item.img} alt={item.title} />
      </td>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>${item.price}</td>
      <td>${item.price}</td>
      <td>
        <button className="btn" onClick={() => onAdd(item)}>
          +
        </button>
        <button className="btn" onClick={() => onRemove(item)}>
          -
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCartItem;
