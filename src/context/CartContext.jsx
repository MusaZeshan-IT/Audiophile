import React, { createContext, useEffect, useState } from "react";
import ProductList from "../helpers/ProductList";
import { json } from "react-router-dom";

// Creating the context
export const CartContext = createContext();

// Setting up the default values for the cart
const getDefaultCart = function () {
    let cart = {};
    for (let i = 1; i < ProductList.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

// Setting up the default values for the products
const getDefaultProducts = function () {
    let products = {};
    for (let i = 1; i < ProductList.length + 1; i++) {
        products[i] = 0;
    }
    return products;
}

// Retrieving stored cart items from local storage
const getStoredCartItems = function () {
    const storedCartProducts = localStorage.getItem('storedCartItems')
    return storedCartProducts ? JSON.parse(storedCartProducts) : null;
}

// Making the provider
export const CartContextProvider = ({ children }) => {
    // Setting up states and their default values
    const [cartItems, setCartItems] = useState(getStoredCartItems() || getDefaultCart());
    const [itemsCount, setItemsCount] = useState(getDefaultProducts());
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    // Functions to add or remove items before adding to cart
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

    // Functions to add or remove items before adding to cart
    const addItemsToCart = function (productId) {
        setCartItems((prevCart) => {
            return { ...prevCart, [productId]: prevCart[productId] + 1 };
        })
    }

    const removeItemsFromCart = function (productId) {
        setCartItems((prevCart) => {
            const currentQuantity = prevCart[productId];
            const newQuantity = currentQuantity > 0 ? currentQuantity - 1 : currentQuantity;
            return { ...prevCart, [productId]: newQuantity };
        })
    }

    // This function confirms and sets the quantity of selected items to the cart
    const setItemsToCart = function (productId) {
        setCartItems((prevCart) => {
            const newQuantity = prevCart[productId] + itemsCount[productId]
            return { ...prevCart, [productId]: newQuantity };
        })
        setItemsCount((prevProducts) => {
            return { ...prevProducts, [productId]: 0 };
        })
    }

    // This function calculates the total number of items in the cart
    const calculateTotalItemsInCart = function () {
        let total = 0;
        for (const cartItem in cartItems) {
            total += cartItems[cartItem];
        }
        return total;
    }

    // This function removes all items from the cart
    const removeAllItemsFromCart = function () {
        setTotalItemsInCart(0);
        localStorage.removeItem('storedCartItems');
    }

    // This hook calculates the total number of items in the cart whenever a change occurs in the cart
    useEffect(() => {
        setTotalItemsInCart(calculateTotalItemsInCart());
    }, [cartItems])

    // This hook saves the cart items to local storage whenever the cart changes
    useEffect(() => {
        const jsonCartItems = JSON.stringify(cartItems);
        localStorage.setItem('storedCartItems', jsonCartItems);
    }, [cartItems])


    // The variable below holds the values the I want to provide to the context and make accessible to all the child components
    const contextValue = {
        itemsCount,
        cartItems,
        totalItemsInCart,
        addItemsToProducts,
        removeItemsFromProducts,
        addItemsToCart,
        removeItemsFromCart,
        setItemsToCart,
        removeAllItemsFromCart,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}