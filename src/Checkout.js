import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
            <img 
                className="checkout_ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt=""
            />
            <div>
             <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
            {basket.map( (item) => (
                <CheckoutProduct key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />
            ))}
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
