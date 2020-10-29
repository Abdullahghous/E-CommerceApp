import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating, starEmoji }) {
    const [{basket}, dispatch] = useStateValue();
    const addTobasket = () => {
        // dispatch items into data-layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title : title,
                price : price,
                image : image,
                rating : rating,
            }
        })
    }


    return (
        <div className="product_container">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map( (_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img
            src={image}
            alt=""
            />
            <button onClick={addTobasket} >Add to Basket</button>
        </div>
    )
}

export default Product
