import React from 'react';
import '../Styles/Product.scss';

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>⭐</p>
                    ))}
            </div>
            </div>
            <img className="product__img" src={image} alt=""/>
                <button className="product__button">Add To Cart</button>

        </div>
    )
}

export default Product
