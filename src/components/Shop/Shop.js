
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../fakeData/Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const products=useLoaderData();
    const[cart,setCart]=useState([]);
    
   
    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
        if (storedCart){
            for(const id in storedCart){
               const addedProduct= products.find(prduct=>prduct.id===id);
               if(addedProduct){
                        const quantity=storedCart[id];
                        addedProduct.quantity=quantity;
                    savedCart.push(addedProduct);
               }
            }
            setCart(savedCart);

        }
    },[products])
   
   const handleAddToCart=(selectedProduct)=>{
    // console.log('its clicked',product)
    let newCart=[];
    const exists=cart.find(product=>product.id===selectedProduct.id);
    if(!exists){
        selectedProduct.quantity=1;
        newCart=[...cart,selectedProduct]
    }
    else{
        const rest=cart.filter(product=> product.id!==selectedProduct.id);
        exists.quantity=exists.quantity+1;
        newCart=[...rest,exists]
    }
     
    setCart(newCart);
    addToDb(selectedProduct.id)
   }
   
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        
                         ></Product>)
                }

            </div>

            <div className="cart-container">
            
            <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;