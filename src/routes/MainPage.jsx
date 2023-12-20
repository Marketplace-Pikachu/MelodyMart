import React, { useState, useEffect } from 'react';
import DepositField from '../components/DepositField';
import NavContainer from '../containers/NavContainer'; 
import ItemsContainer from '../containers/ItemsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/userSlice';

const MainPage = () => {
  const [displayMode, setDisplayMode] = useState('for-sale');

  return (
    <div className='mainpage'>
      <NavContainer setDisplayMode={setDisplayMode}/>
      <div className='mainpage-rightside'>
        <DepositField />
        <ItemsContainer className='items' mode={displayMode} />
      </div>
    </div>
  );
};

export default MainPage;
