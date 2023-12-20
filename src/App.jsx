import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FakeLoginPage from './routes/FakeLoginPage';
import SignUpPage from './routes/SignUpPage';
import MainPage from './routes/MainPage';
import LoginPage from './routes/LoginPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/mainpage' element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default App;