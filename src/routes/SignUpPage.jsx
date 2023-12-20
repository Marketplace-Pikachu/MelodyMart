import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [funds, setFunds] = useState(0);
    const [profilePictureUrl, setProfilePictureUrl] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        
        const signUpInfo = {
            username,
            password,
            funds: parseFloat(funds),
            profilePicture: profilePictureUrl
        };

        fetch('http://localhost:3000/user/signup', {
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
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/mainpage') // or whatever it's called
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="signup-container">
  <div className="signup-form">
    <div className="logo-container">
      <img src="MelodyMartLogo.png" alt="Website Logo" className="website-logo" />
    </div>
    <h2>Sign Up</h2>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
      className="signup-input"
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="signup-input"
    />
    <input
      type="text"
      value={funds}
      onChange={(e) => setFunds(e.target.value)}
      placeholder="Add Funds"
      className="signup-input"
    />
    <input
      type="text"
      value={profilePictureUrl}
      onChange={(e) => setProfilePictureUrl(e.target.value)}
      placeholder="Profile Picture URL"
      className="signup-input"
    />
    <button onClick={handleSignUp} className="signup-button">Sign Up</button>
  </div>
</div>

    );
};

export default SignUpPage;

