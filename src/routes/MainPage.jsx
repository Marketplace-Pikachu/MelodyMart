import React from 'react';
import DepositField from '../components/DepositField';
import NavContainer from '../containers/NavContainer'; 
import ItemsContainer from '../containers/ItemsContainer';

const MainPage = () => {
  return (
    <div className='mainpage'>
      <NavContainer />
      <div className='mainpage-rightside'>
        <DepositField />
        <ItemsContainer className='items'/>
      </div>
    </div>
  );
};

export default MainPage;
