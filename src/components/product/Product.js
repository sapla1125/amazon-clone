import React from 'react'
import "./Product.css"

function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p> {title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p className='product__star'>⭐️</p>
                    ))}
                    
                </div>

            </div>

            <img className='product__image' alt='Product Image' 
            src={image}/>

            <button className='product__button'>Add to Cart</button>
            
        </div>
    )
}

export default Product
