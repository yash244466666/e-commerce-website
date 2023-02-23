/* eslint-disable */
import { createContext , useState, useEffect} from 'react';

const addcartItems = (cartItems, productToAdd) => {
    const existingcartItems = cartItems.find((cartItems) => cartItems.id === productToAdd.id);

    if (existingcartItems) {
        return cartItems.map((cartItems) => 
            cartItems.id === productToAdd.id 
            ?{...cartItems, quantity: cartItems.quantity + 1}
            : cartItems
        );
    }
    return [...cartItems, {...productToAdd, quantity: 1 }]; 
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItems = cartItems.find((cartItem) => cartItem.id !== cartItemToRemove.id);

    if(existingCartItems.quantity == 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }; 

    return cartItems.map((cartItems) => 
    cartItems.id === cartItemToRemove.id 
    ?{...cartItems, quantity: cartItems.quantity - 1}
    : cartItems
);
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItems) => cartItems.id !== cartItemToClear.id);
}




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemsFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity,0);
        setCartCount(newCartCount);
    },[cartItems])


    useEffect(() =>{
        const newCartTotal = cartItems.reduce((total, cartItems) => total + cartItems.quantity * cartItems.price,0);
        setCartTotal(newCartTotal);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setcartItems(addcartItems(cartItems, productToAdd))
    }
    const removeItemToCart = (cartItemToRemove) => {
        setcartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clrarItemFromCart = (cartItemToClear) => {
        setcartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemToCart,
        clrarItemFromCart,
        cartItems,
        cartCount,
        cartTotal,        
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}