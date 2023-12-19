import React from 'react';
import { useState } from 'react';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [funds, setFunds] = useState(0);
    const [profilePicture, setProfilePicture] = useState('');

    const handleSignUp = () => {
        
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('funds', funds);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }

        fetch('/user/signup', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error ('Response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //Navigate to main dash
        })
        .catch(error => {
            //handle error
        })
    };

    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <input type='number' value={funds} onChange={(e)=> setFunds(e.target.value)} placeholder='Add Funds'/>
            <input type='file' onChange={(e)=> setProfilePicture(e.target.files[0])} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUpPage;

