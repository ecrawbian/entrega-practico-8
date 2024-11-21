import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const groceries = [
  { id: 1, name: "Frutilla", unitPrice: 50.3 },
  { id: 2, name: "Uva", unitPrice: 23.0 },
  { id: 3, name: "Naranja", unitPrice: 76.0 },
  { id: 4, name: "Banana", unitPrice: 55.9 },
  { id: 5, name: "Manzana", unitPrice: 31.0 },
  { id: 6, name: "Zanahoria", unitPrice: 17.6 },
  { id: 7, name: "Puerro", unitPrice: 30.0 },
  { id: 8, name: "Champiñon", unitPrice: 80.0 },
  { id: 9, name: "Pan", unitPrice: 22.5 },
  { id: 10, name: "Huevo", unitPrice: 29.0 },
  { id: 11, name: "Queso", unitPrice: 130.0 },
  { id: 12, name: "Manteca", unitPrice: 90.0 },
  { id: 13, name: "Pollo", unitPrice: 115.0 },
  { id: 14, name: "Milanesa", unitPrice: 97.0 },
  { id: 15, name: "Helado", unitPrice: 88.0 },
  { id: 16, name: "Pescado", unitPrice: 150.0 },
  { id: 17, name: "Arroz", unitPrice: 36.0 },
  { id: 18, name: "Fideos", unitPrice: 56.0 },
  { id: 19, name: "Bizcocho", unitPrice: 72.0 },
  { id: 20, name: "Papel Higiénico", unitPrice: 45.0 },
  { id: 21, name: "Alcohol en Gel", unitPrice: 83.0 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== productId);
      }
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  };

  return (
    <div className="app-container">
      <ProductList products={groceries} addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
      />
    </div>
  );
}

export default App;
