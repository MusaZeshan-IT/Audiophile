import React, { createContext, useState } from "react";
import ProductList from "../helpers/ProductList";

export const CartContext = createContext();

const getDefaultCart = function () {
    let cart = {};
    for (let i = 1; i < ProductList.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const getDefaultProducts = function () {
    let products = {};
    for (let i = 1; i < ProductList.length + 1; i++) {
        products[i] = 0;
    }
    return products;
}

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [itemsCount, setItemsCount] = useState(getDefaultProducts());

    const addItemsToProducts = function (productId) {
        setItemsCount((prevProducts) => {
            return { ...prevProducts, [productId]: prevProducts[productId] + 1 };
        })
    }

    const removeItemsFromProducts = function (productId) {
        setItemsCount((prevProducts) => {
            const currentQuantity = prevProducts[productId];
            const newQuantity = currentQuantity > 0 ? currentQuantity - 1 : currentQuantity;
            return { ...prevProducts, [productId]: newQuantity };
        })
    }

    // The variable below holds the values the I want to provide to the context and make accessible to all the child components
    const contextValue = { itemsCount, addItemsToProducts, removeItemsFromProducts }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}