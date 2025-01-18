import React from "react";
import CartItem from "./CartItem";


// Cart component
function Cart({cartItems, onIncrease, onDecrease, onRemove}) {

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>

      {/* Display cart items */}
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