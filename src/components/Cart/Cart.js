import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    
    let total=0;
    let shippingTotal=0;
    

    for(const product of cart){
        total=total+product.price;
        shippingTotal=shippingTotal+product.shipping;
    }
    const tax=parseFloat((total*0.1).toFixed(2));
    const grandTotal=total+shippingTotal+tax;
    return (
        <div className='cart'>
            <h3> Order summry</h3>
                <p>Item Selected :{cart.length} </p>
                <p>Total price: ${total} </p>
                <p>Total shipping: ${shippingTotal}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total:$ {grandTotal}</h5>

            
        </div>
    );
};

export default Cart;