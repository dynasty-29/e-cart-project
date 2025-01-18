import React from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

// ProductList component
function ProductList({products, addToCart}) {
  return (
    <div className="product-list" id="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
export default ProductList;