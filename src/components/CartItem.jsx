import React from "react";

// CartItem component
function CartItem({item, onIncrease, onDecrease, onRemove}) {
  return (
    // Cart item
    <div className="cart-item" id="checkout">
      <h4>{item.name}</h4>
    
      {/* Display item details */}
      <p>Price: ${item.price}</p>
      
      {/*  Display item quantity */}
      <p>Quantity: ${item.quantity}</p>

      {/* Increase, decrease and remove buttons */}
      <button type="button" className="btn-increase" onClick={() => onIncrease(item.id)}><strong>+</strong></button>
      <button type="button" className="btn-decrease" onClick={() => onDecrease(item.id)}><strong>-</strong></button>
      <button type="button" className="btn-remove" onClick={() => onRemove(item.id)}><strong>Remove</strong></button>
    </div>
  );
}
export default CartItem;