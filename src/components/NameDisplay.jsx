import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NameDisplay = ({ setDisplayMode }) => {
  const name = useSelector((state) => state.user.name);
  const purchasedItems = useSelector((state) => state.user.purchasedItems);

  return (
    <div className='name-display'>
      <h2>Hello, {name}</h2>
      <button onClick={() => setDisplayMode('for-sale')}>Items For Sale</button>
      <button onClick={() => setDisplayMode('cart')}>My Cart</button>
      <button onClick={() => setDisplayMode('purchased')}>
        Purchased Items
      </button>
    </div>
  );
};

export default NameDisplay;
