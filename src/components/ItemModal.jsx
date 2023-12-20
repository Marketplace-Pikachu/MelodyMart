import React from 'react';

const ItemModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  console.log('ItemModal is open');

  return (
    <div className='modal-background'>
      <div className='modal-content'>
        <div>Item Modal</div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ItemModal;
