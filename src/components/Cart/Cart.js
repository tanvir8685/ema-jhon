import React from 'react';
import './Cart.css'

const Cart = ({cart,clearCart,children}) => {
    
    let quantity=0;
    
    let total=0;
    let shippingTotal=0;
    

    for(const product of cart){
        quantity=quantity+ product.quantity;
        total=total+product.price *product.quantity;
        shippingTotal=shippingTotal+product.shipping*product.quantity;
    }
    const tax=parseFloat((total*0.1).toFixed(2));
    const grandTotal=total+shippingTotal+tax;
    return (
        <div className='cart'>
            <h3> Order summry</h3>
                <p>Item Selected :{quantity} </p>
                <p>Total price: ${total} </p>
                <p>Total shipping: ${shippingTotal}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total:$ {grandTotal}</h5>
                <button onClick={clearCart}>Clear Cart</button>
                {
                    children
                }

            
        </div>
    );
};

export default Cart;