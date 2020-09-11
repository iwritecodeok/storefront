import { ShoppingBasket } from '@material-ui/icons';
import React from 'react'
import { useStateValue } from "../StateProvider";
import '../Styles/Checkout.scss';
import CheckoutItem from './CheckoutItem';
import '../Styles/Checkout.scss'
function Checkout() {
    const[{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img  className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/blm_2/BHP_billboard_1500x300.jpg" 
            alt=""/>
        {cart?.length === 0 ?(
            <div>
                <h2>Your Cart is Empty</h2>
                <p>The Cart is empty. Go shopping pls.</p>
            </div>
        ):(
            <div>
                <h2 className="checkout__title">Your Cart</h2>
            {/* list checkout item */}
            {cart?.map(item=>(
                <CheckoutItem
                id={item.id}
                title ={item.title}
                image={item.image}
                price={item.price}
                rating = {item.rating}/>
            ))}
            
            </div>
        )}
        </div>
        {cart.length > 0 &&(
        <div className="checkout__right">
        {/* subtotal */}
        <h1>Subtotal</h1>
        </div>
        )}

        </div>
    );
}

export default Checkout
