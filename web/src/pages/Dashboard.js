import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Logging out...");
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <p>Welcome! You are securely logged in.</p>
            <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white' }}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;