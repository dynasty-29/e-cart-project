import React from "react";

// ProductItem component
function ProductItem({product, addToCart}) {
  return (
    // Product item
    <div className="product-item">
      <h3>{product.name}</h3>

      {/* Display product price */}
      <p>Price: ${product.price}</p>
      <button type="button" className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
export default ProductItem;