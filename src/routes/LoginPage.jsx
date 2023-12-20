import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = async () => {
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error ('Login failed');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data.user));

            console.log(data.user)
            dispatch(login(data.user));
            
            navigate('/mainpage') // or whatever it's called
        })
        .catch(error => {
            setError('Failed to login. Please check your username and password.')
        })
    };

    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
            {error && <div className='error-message'>{error}</div>}
            <div>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
};

export default LoginPage;