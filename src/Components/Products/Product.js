import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product
    return (
        <div className='product'>
            <img src={img} alt="shoe images" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} Start</p>
            </div>
            <button onClick={props.handleClick}
                className='btn'>
                Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product; <h1>Hello Products</h1>