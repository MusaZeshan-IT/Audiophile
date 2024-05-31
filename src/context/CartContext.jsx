import React, { createContext, useEffect, useState } from "react";
import ProductList from "../helpers/ProductList";

// Creating the context
export const CartContext = createContext();

// Setting up the default values
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

// Making the provider
export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [itemsCount, setItemsCount] = useState(getDefaultProducts());
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

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

    const addItemsToCart = function (productId) {
        setCartItems((prevCart) => {
            const newQuantity = prevCart[productId] + itemsCount[productId]
            return { ...prevCart, [productId]: newQuantity };
        })
        setItemsCount((prevProducts) => {
            return { ...prevProducts, [productId]: 0 };
        })
    }

    const calculateTotalItemsInCart = function () {
        let total = 0;
        for (const cartItem in cartItems) {
            total += cartItems[cartItem];
        }
        return total;
    }

    useEffect(() => {
        setTotalItemsInCart(calculateTotalItemsInCart());
    }, [cartItems])

    const removeAllItemsFromCart = function () {
        setTotalItemsInCart(0);
    }

    // The variable below holds the values the I want to provide to the context and make accessible to all the child components
    const contextValue = {
        itemsCount,
        cartItems,
        totalItemsInCart,
        addItemsToProducts,
        removeItemsFromProducts,
        addItemsToCart,
        removeAllItemsFromCart,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}