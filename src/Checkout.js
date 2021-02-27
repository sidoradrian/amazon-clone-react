import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (

        
        <div className="checkout">
            <div >
            <img className="checkout_ad"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                  alt=""/>

            <div>
                <h2>{ "Hello " + user?.currentUser.email }</h2>
                <h2 className="checkout_title">
                    Your shopping basket
                </h2>

                {
                    basket.map( item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
             )) }
           </div>
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>
                 
           </div>
        
        </div>
    )
}

export default Checkout
