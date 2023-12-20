import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchase, removeFromCart } from "../slices/userSlice";
import { removeItem } from "../slices/itemsSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.user.balance);

  const handlePerchaseItem = () => {
    dispatch(removeItem(item.id));
    dispatch(removeFromCart(item.id));
    dispatch(purchase(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div className="item" key={item.id}>
      <h3>{item.name}</h3>
      <h4>{'Seller: ' + item.seller}</h4>
      <h4>{item.description}</h4>
      <h4>{'Price: '+ item.price}</h4>
      <button onClick={handlePerchaseItem}>Purchace</button>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
}

export default CartItem;