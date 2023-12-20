import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NameDisplay = ({ setDisplayMode }) => {
  const username = useSelector((state) => state.user.name);
  const balance = useSelector((state) => state.user.balance);
  const purchasedItems = useSelector((state) => state.user.purchasedItems);
  const profilePicture = useSelector((state) => state.user.profilePicture);

  console.log('username:', username)
  console.log('balance:', balance)
  console.log('profilePicture:', profilePicture)

  return (
    <div className='name-display'>
      <h2>Welcome, {username}</h2>
      <img src={profilePicture} alt='Profile' />
      <p>Balance: ${balance}</p>
      <button onClick={() => setDisplayMode('for-sale')}>Items For Sale</button>
      <button onClick={() => setDisplayMode('cart')}>My Cart</button>
      <button onClick={() => setDisplayMode('purchased')}>
        Purchased Items
      </button>
    </div>
  );
};

export default NameDisplay;
