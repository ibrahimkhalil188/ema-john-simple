import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }

            </div>


            <div className="shop-summary">This is summary</div>
        </div>
    );
};

export default Shop;