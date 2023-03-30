import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [Products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>coming : {Products.length}</h2>
            </div>
            <div className="card-container">
                <h3> Oder see</h3>
            </div>
        </div>
    );
};

export default Shop;