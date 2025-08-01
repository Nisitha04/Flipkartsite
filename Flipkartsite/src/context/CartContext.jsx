import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    const existing = cartItems.find(item => item.title === product.title);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.title !== product.title));
  };

  // Increase quantity
  const increaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.title === product.title
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    ));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};