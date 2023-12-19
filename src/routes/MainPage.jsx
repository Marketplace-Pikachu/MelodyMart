import React from 'react';
import DepositField from '../components/DepositField';
import NavContainer from '../containers/NavContainer';

const MainPage = () => {
  return (
    <div className='mainpage'>
      <NavContainer />
      <div>
        <DepositField />
      </div>
    </div>
  );
};

export default MainPage;
