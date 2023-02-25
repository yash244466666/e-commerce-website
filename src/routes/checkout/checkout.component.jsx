/* eslint-disable */
import "./checkout.style.scss";

import {useContext} from "react";
import {CartContext} from "../../context/cart.context"; 

import CheckoutItems from "../../components/checkout-items/checkout-items.component";

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return(
        <div className="checkout-container">
            <div className="checkout-header"> 
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Discription</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price/Unit</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
                {cartItems.map((cartItem) => (
                        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className="total">Grand Total : {cartTotal}</span>

            </div>
    );
}

export default Checkout;