import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const{id,category,name,seller,price,stock,ratings,img,shipping,quantity}=product;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratting:{ratings} star</small></p>
           </div>
           <button onClick={()=>handleAddToCart(product)}  className='btn-cart'>
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;