import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItems, removeFromCart }) {
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
    </div>
  );
}

export default Cart;
