import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item" onClick={() => removeFromCart(item.id)}>
      {item.name} - ${item.unitPrice.toFixed(2)} x {item.quantity}
    </div>
  );
}

export default CartItem;
