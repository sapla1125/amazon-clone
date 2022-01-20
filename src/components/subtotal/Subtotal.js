import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                                {/* HW */}
                            Subtotal ({basket.length} items):
                            <strong>{(getBasketTotal(basket)).toFixed(2)}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} //HW
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className='checkout__button'>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
