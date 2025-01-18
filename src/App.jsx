import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import products from "./data/products";


// App component
function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart function
  function handleAddToCart(product) {
    setCartItems((prevCart) => {
      const item = prevCart.find((item) => item.id === product.id);
      if (item) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Increase to cart functions
  function handleonIncrease(id) {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease from cart functions
  function handleonDecrease(id) {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove from cart functions
  function handleonRemove(id) {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
      <div className="app">
        <section id="home">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>  
        <section id="products">
          <ProductList  products={products} addToCart={handleAddToCart}/>
        </section>
        <section id="checkout">
          <Cart 
          cartItems={cartItems}
          onIncrease={handleonIncrease}
          onDecrease={handleonDecrease}
          onRemove={handleonRemove}/>
        </section>
        <section id="footer">
          <Footer />  
        </section>
      </div>
  )
}

export default App;
