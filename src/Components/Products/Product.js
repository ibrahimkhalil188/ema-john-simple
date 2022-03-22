import React from 'react'
import './Product.css'

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product
    const handleClick = () => {
        <p>{name}</p>
    }
    return (
        <div className='product'>
            <img src={img} alt="shoe images" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} Start</p>
            </div>
            <button onClick={handleClick}
                className='btn'>Add to cart</button>
        </div>
    );
};

export default Product; <h1>Hello Products</h1>