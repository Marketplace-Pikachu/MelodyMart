import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, setItems } from '../slices/itemsSlice';

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
  const items = useSelector((state) => state.items.itemsList);
  const balance = useSelector((state) => state.user.balance);

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

  return (
    <div className='items-container'>
      {items.map((item) => (
        <div className='item' key={item.id}>
          <h3>{item.name}</h3>
          {/* <h4>{item.seller}</h4> */}
          <h4>{item.description}</h4>
          <h4>{item.price}</h4>
          <button onClick={() => handleAddItem(item)}>Add</button>
          <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;
