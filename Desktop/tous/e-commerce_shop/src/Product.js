import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
    const[{Basket},dispatch]= useStateValue()
    console.log('basket content', Basket)
    const addToBasket=()=>{
        dispatch({
        type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <img className="product__image" src={image} alt={title} />
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <strong>${price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                </div>
                <button onClick={addToBasket} style={{ fontSize: '20px', padding: '10px', cursor: 'pointer' }}>
                    🛒 Ajouter au panier
                </button>
            </div>
        </div>
    );
}

export default Product;
