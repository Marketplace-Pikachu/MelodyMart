import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/userSlice";
import { removeItem, updateItem } from "../slices/itemsSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.user.balance);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="item" key={item.id}>
      <h3>{item.name}</h3>
      <h4>{'Seller: ' + item.seller}</h4>
      <h4>{item.description}</h4>
      <h4>{'Price: '+ item.price}</h4>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default Item;