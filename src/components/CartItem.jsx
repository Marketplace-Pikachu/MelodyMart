import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchase, removeFromCart } from "../slices/userSlice";
import { removeItem } from "../slices/itemsSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.user.balance);

  const handlePerchaseItem = () => {
    const itemPrice = item.price;
    const remainingBalance = balance - itemPrice;

    if (remainingBalance < 0) {
      alert("Not enough funds, cannot purchase");
    } else {
      dispatch(removeItem(item.product_id));
      dispatch(removeFromCart(item.product_id));
      dispatch(purchase(item));
      alert(`${item.product_title} purchased!`);
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.product_id));
    alert(`${item.product_title} removed from cart`);
    
  }

  return (
    <div className="item" key={item.id}>
      <img src={item.image_link} alt={item.product_title} />
      <h3>{item.product_title}</h3>
      <h4>{'Seller: ' + item.seller}</h4>
      <h4>{item.description}</h4>
      <h4>{'Category: ' + item.category}</h4>
      <h4>{`Price: $${item.price}`}</h4>
      <button onClick={handlePerchaseItem}>Purchace</button>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
}

export default CartItem;