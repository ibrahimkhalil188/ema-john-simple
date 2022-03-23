import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { fakedb, getAddedItem } from '../Utilities/fakedb';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getAddedItem()
        const saveCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)


            }
        }
        setCart(saveCart)
    }, [products])

    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        fakedb(product.id)
    }

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={() => handleClick(product)}
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