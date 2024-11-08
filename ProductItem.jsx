import React from "react";

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item" onClick={() => addToCart(product)}>
      {product.name} - ${product.unitPrice.toFixed(2)}
    </div>
  );
}

export default ProductItem;
