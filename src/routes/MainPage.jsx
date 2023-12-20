import React, { useState, useEffect } from 'react';
import DepositField from '../components/DepositField';
import NavContainer from '../containers/NavContainer'; 
import ItemsContainer from '../containers/ItemsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';



const MainPage = () => {
  const navigate = useNavigate();
  const [displayMode, setDisplayMode] = useState('for-sale');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login')
  }

  return (
    <div className='mainpage'>
      {/* <div className='header-banner'>
        <div className="logo">
          <img src='../assets/MelodyMartLogo.png' alt="Logo" />
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div> */}
      <NavContainer setDisplayMode={setDisplayMode}/>
      <div className='mainpage-rightside'>
        <ItemsContainer className='items' mode={displayMode} />
      </div>
    </div>
  );
};

export default MainPage;
