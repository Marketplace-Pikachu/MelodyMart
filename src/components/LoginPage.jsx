import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        fetch('/user/login', {
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
            navigate('/dashboard') // or whatever main dashboard path is
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