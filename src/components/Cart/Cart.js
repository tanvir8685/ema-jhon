import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>This is for order summry</h3>
                <p>Item Selected {cart.length} </p>
            
        </div>
    );
};

export default Cart;