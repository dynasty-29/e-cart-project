import React from "react";
import CartItem from "./CartItem";

function Cart({cartItems, onIncrease, onDecrease, onRemove}) {

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (<p>Your cart is empty</p>) : 
      (cartItems.map((item) => (
        <CartItem 
        key={item.id}
        item={item}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
        />
      )))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
export default Cart;