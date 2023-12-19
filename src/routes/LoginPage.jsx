import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate('/mainpage');
  };

  const handleLogin = async () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //navigate to main dash
        dispatch(login({ name: username, balance: data.balance }));
      })
      .catch((error) => {
        //handle error
      });
  };

  const fakeHandleLogin = () => {
    dispatch(login({ name: username, balance: 100 }));
    navigateToMainPage();
  }

  return (
    <div>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button onClick={fakeHandleLogin}>Login</button>
      <div>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
