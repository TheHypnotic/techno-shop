import React from "react";

const ShoppingCartItem = ({ item, onAdd, onRemove }) => {
  return (
    <tr>
      <td className="cart-item">
        <img src={item.img} alt={item.title} />
      </td>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>${item.price}</td>
      <td>${item.price}</td>
      {/* <td>${(item.amount * item.singlePrice).toFixed(2)}</td> */}
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
