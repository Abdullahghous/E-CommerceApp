import React from 'react'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFrombasket = () => {
        // Remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
                <div className="checkout_product">
                <div>
                    <img
                     className="checkout_product_img"
                     src={image}
                     alt=""
                    />
                </div>
                <div className="checkout_product_data">
                    <p className="checkout_product_title">{title}</p>
                    <strong>${price}</strong>
                    <div className="checkout_product_rating">
                    {Array(rating).fill().map( (_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFrombasket}>Remove</button>
                </div>
            </div>
    )
}

export default CheckoutProduct
