/* eslint-disable */
import { useContext } from "react";

import {ReactComponent as ShoppingICon} from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

import {CartContext} from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggelIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className="cart-icon-container" onClick={toggelIsCartOpen}>
            <ShoppingICon className='shopping-icon'/>
            <span className="item-count">{cartCount}</span> 
        </div>
    );


}

export default CartIcon;