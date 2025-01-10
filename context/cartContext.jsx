import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    let id = cartItems.findIndex((e) => {
      return e.id === item.id;
    });
    if (id >= 0) {
      let arr = cartItems;

      (arr[id].quantity = arr[id].quantity + item.quantity),
        setCartItems([...arr]);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        modal,
        setModal,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
