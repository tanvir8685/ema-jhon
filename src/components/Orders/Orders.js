import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const {initialCart,products} =useLoaderData();
    const [cart,setcart]=useState(initialCart);
    const handleRemoveItem=(id)=>{
        const remaining =cart.filter(product=>product.id!==id);
        setcart(remaining);
        removeFromDb(id);
    }
    const clearCart=()=>{
        setcart([]);
        deleteShoppingCart();
    }

    
    
   
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product=><ReviewItem 
                    key={product.id} 
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    >

                    </ReviewItem>)
                }
                {
                    cart.length===0 && <h2>No items for review .Please <Link to='/'>Shop more</Link></h2>
                }

            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                 <Link to='/'>
                 <button>Shop</button></Link>   
                </Cart>

            </div>
           
        </div>
    );
};

export default Orders;