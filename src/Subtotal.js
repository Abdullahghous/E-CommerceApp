import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import { totalBasketValue } from './reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
    // let total = 0;

    // {
    //  basket.map(item => (
    //     total += item.price
    //  )) 
    // }

    return (
        <div className="subtotal">
            <p>Subtotal ({basket.length} items): <strong>${totalBasketValue(basket).toFixed(2)}</strong></p>
            <small className="subtotal_gift">
                <input type="checkbox" />
                This Order contain a gift
            </small>
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
