import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const element of cart) {
        total = total + element.price
        shipping = shipping + element.shipping;
        quantity = quantity + element.quantity
    }
    const tax = (total * 0.1).toFixed(2)
    const GrandTotal = total + shipping + parseFloat(tax)
    return (
        <div className='cart-item'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total * quantity}</p>
            <p>Total Price: ${shipping * quantity}</p>
            <p>Total Price: ${tax}</p>
            <hr />
            <h4>Grand Total: ${GrandTotal}</h4>
        </div>
    );
};

export default Cart;