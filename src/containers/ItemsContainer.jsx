import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setItems } from '../slices/itemsSlice';
import Item from '../components/Item';

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

const ItemsContainer = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(0);
  const items = useSelector((state) => state.items.itemsList);
  const balance = useSelector((state) => state.user.balance);
  const purchasedItems = useSelector((state) => state.user.purchasedItems);

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

  const handleModeChange = () => {
    if (mode === 0) {
      setMode(1);
    } else {
      setMode(0);
    }
  };

  if (mode === 0) {
    return (
      <div>
        <button onClick={handleModeChange}>Purchased Items</button>
        <div className='items-container'>
          {items.map((item) => (
            <Item className='item' key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleModeChange}>Items For Sale</button>
      <div className='items-container'>
        {purchasedItems.map((item) => (
          <Item className='item' key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
