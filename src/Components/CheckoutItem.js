import React from "react";
import "../Styles/CheckoutItem.scss";
import { useStateValue } from "../StateProvider";

function CheckoutItem({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutItem">
      <img className="checkoutItem__image" src={image} alt="" />
      <div className="checkoutItem__info">
        <p className="checkoutItem__title">{title}</p>
        <p className="checkoutItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart} className="checkoutItem__button">
          remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
