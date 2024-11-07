import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItems, removeFromCart, total }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
