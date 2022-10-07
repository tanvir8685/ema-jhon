import React from 'react';

const ReviewItem = ({product}) => {
    const {name,price,quantity}=product;
    return (
        <div>
            <h1>This is review item</h1>
        </div>
    );
};

export default ReviewItem;