import React from "react";
import { useSelector, useDispatch } from "react-redux";


const PurchasedItem = ({ item }) => {

  return (
    <div className="item" key={item.id}>
      <img src={item.image_link} alt={item.product_title} />
      <h3>{item.product_title}</h3>
      <h4>{'Seller: ' + item.seller}</h4>
      <h4>{item.description}</h4>
      <h4>{'Category: ' + item.category}</h4>
      <h4>{`Price: $${item.price}`}</h4>
    </div>
  );
}

export default PurchasedItem;