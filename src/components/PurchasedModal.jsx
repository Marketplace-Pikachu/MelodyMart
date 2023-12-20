import React from "react";

const PurchasedModal = ({ isOpen, items }) => { 
  if (!isOpen) return null;
  return (
    <div className='purchased-modal'>
      <div className="modal-content">
        <h4>Purchased Items</h4>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PurchasedModal;