import React, { useState } from 'react';
import PurchasedModal from './PurchasedModal';
import { useSelector } from 'react-redux';

const NameDisplay = () => {
  const [showModal, setShowModal] = useState(false);
  const name = useSelector((state) => state.user.name);
  const purchasedItems = useSelector((state) => state.user.purchasedItems);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='name-display'>
      <h2>Hello, {name}</h2>
      <button onClick={showModal? handleCloseModal: handleShowModal}>Purchased Items</button>
      <PurchasedModal
        isOpen={showModal}
        items={purchasedItems}
      />
    </div>
  );
};

export default NameDisplay;
