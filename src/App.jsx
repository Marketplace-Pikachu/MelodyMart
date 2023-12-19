import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </Routes>
            </div>
        </Router>
    )
};

export default App;