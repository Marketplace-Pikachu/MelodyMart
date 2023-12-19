import React from "react";
import { deposit } from '../slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const DepositField = () => {
  const dispatch = useDispatch();
  const [depositAmount, setDepositAmount] = useState(0);
  const balance = useSelector(state => state.user.balance);

  const handleDeposit = () => {
    dispatch(deposit(depositAmount));
  }

  return (
    <div>
      <h2>Balance: {balance}</h2>
      <input type="number" onChange={(e) => setDepositAmount(Number(e.target.value))} />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  )
}

export default DepositField;
