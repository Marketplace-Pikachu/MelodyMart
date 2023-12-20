import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setItems } from '../slices/itemsSlice';
import Item from '../components/Item';
import PurchasedItem from '../components/PurchasedItem';
import CartItem from '../components/CartItem';

const ItemsContainer = ({ mode }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.itemsList);
  const balance = useSelector((state) => state.user.balance);
  const purchasedItems = useSelector((state) => state.user.purchasedItems);
  const cartItems = useSelector((state) => state.user.cartItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/');
        const data = await response.json();
        dispatch(setItems(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchData();
  }, []);

  const handleAddItem = (item) => {
    if (balance >= item.price) {
      dispatch(addItem(item));
    } else {
      alert('Not enough money!');
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  if (mode === 'for-sale') {
    return (
      <div>
        <div className='items-container'>
          {items.map((item) => (
            <Item className='item' key={item.product_id} item={item} />
          ))}
        </div>
      </div>
    );
  }
  if (mode === 'cart') {
    return (
      <div>
        <div className='items-container'>
          {cartItems.map((item) => (
            <CartItem className='item' key={item.product_id} item={item} />
          ))}
        </div>
      </div>
    );

  }
  return (
    <div>
      <div className='items-container'>
        {purchasedItems.map((item) => (
          <PurchasedItem className='item' key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
