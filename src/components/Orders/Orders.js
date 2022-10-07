import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {initialCart,products} =useLoaderData();
    const [cart,setcart]=useState(initialCart);

    
    
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product=><ReviewItem 
                    key={product.id} 
                    product={product}
                    >

                    </ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Orders;