import React from 'react';
import "./Checkout.css";
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProducts/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/JanArt22/NonPrimePage/T1/pc_Try-Prime-for-Free1.jpg'
                    alt='' />
            
                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>
                        {basket.map(item => (
                            <CheckoutProduct 
                                if={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    

                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
