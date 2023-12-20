import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { purchase } from "../slices/userSlice";
import { removeItem } from "../slices/itemsSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.user.balance);

  const handleAddItem = () => {
    if (balance >= item.price) {
      dispatch({ type: "items/addItem", payload: item });
    } else {
      alert("Not enough money!");
    }
  };

  const handlePerchaseItem = () => {
    dispatch(removeItem(item));
    dispatch(purchase(item));
  };

  return (
    <div className="item" key={item.id}>
      <h3>{item.name}</h3>
      <h4>{'Seller: ' + item.seller}</h4>
      <h4>{item.description}</h4>
      <h4>{'Price: '+ item.price}</h4>
      <button onClick={handlePerchaseItem}>Purchace</button>
    </div>
  );
}

export default Item;