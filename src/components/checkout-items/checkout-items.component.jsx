import "./checkout-items.style.scss";

import {useContext} from "react"
import  {CartContext} from "../../context/cart.context";


const CheckoutItems = ({cartItem}) => {
    const {name, id, quantity, price, imageUrl} = cartItem;
    
    const {clrarItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);
    const clearItemHandler = () => clrarItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={removeItemHandler}>
                &#10094;
            </div>
            <span>
                {quantity}
            </span>
            <div className="arrow" onClick={addItemHandler}>
                &#10095;
            </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}


export default CheckoutItems;