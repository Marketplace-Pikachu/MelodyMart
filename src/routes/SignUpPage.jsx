import React from 'react';
import { useState } from 'react';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [funds, setFunds] = useState(0);
    const [profilePictureUrl, setProfilePictureUrl] = useState('');

    const handleSignUp = () => {
        
        const signUpInfo = {
            username,
            password,
            funds: parseFloat(funds),
            profilePicture: profilePictureUrl
        };

        fetch('/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpInfo)
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
            <input type='text' value={profilePictureUrl} onChange={(e)=> setProfilePictureUrl(e.target.value)} placeholder='Profile Picture URL' />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUpPage;

