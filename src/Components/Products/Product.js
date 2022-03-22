import React from 'react'
import './Product.css'

const Product = (props) => {
    const { name, img, price, rating } = props.product
    return (
        <div className='product'>
            <img src={img} alt="shoe images" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product; <h1>Hello Products</h1>