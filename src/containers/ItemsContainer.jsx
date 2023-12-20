import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setItems } from '../slices/itemsSlice';
import Item from '../components/Item';
import PurchasedItem from '../components/PurchasedItem';
import CartItem from '../components/CartItem';

const testItems = [
  {
    id: 1,
    seller: 'Adrian',
    name: 'Item 1',
    description: 'in good condition',
    price: 100,
  },
  {
    id: 2,
    seller: 'Harold',
    name: 'Item 2',
    description: 'in good condition',
    price: 200,
  },
  {
    id: 3,
    seller: 'Jordan',
    name: 'Item 3',
    description: 'in good condition',
    price: 300,
  },
];

const ItemsContainer = ({ mode }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.itemsList);
  const balance = useSelector((state) => state.user.balance);
  const purchasedItems = useSelector((state) => state.user.purchasedItems);
  const cartItems = useSelector((state) => state.user.cartItems);

  useEffect(() => {
    dispatch(setItems(testItems));
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
            <Item className='item' key={item.id} item={item} />
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
            <CartItem className='item' key={item.id} item={item} />
          ))}
        </div>
      </div>
    );

  }
  return (
    <div>
      <div className='items-container'>
        {purchasedItems.map((item) => (
          <PurchasedItem className='item' key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
