import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            if (res.data === "Login successful!") {
                navigate('/dashboard');
            } else {
                alert(res.data);
            }
        } catch (err) {
            alert("Login error. Is the backend on?");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    );
};

export default Login;