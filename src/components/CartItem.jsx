import React from "react";

function CartItem({item, onIncrease, onDecrease, onRemove}) {
  return (
    <div className="cart-item" id="checkout">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button type="button" className="btn-increase" onClick={() => onIncrease(item.id)}><strong>+</strong></button>
      <button type="button" className="btn-decrease" onClick={() => onDecrease(item.id)}><strong>-</strong></button>
      <button type="button" className="btn-remove" onClick={() => onRemove(item.id)}><strong>Remove</strong></button>
    </div>
  );
}
export default CartItem;