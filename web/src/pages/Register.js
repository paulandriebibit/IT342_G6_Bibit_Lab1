import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Include username in the payload sent to the Spring Boot API
            const res = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                email,
                password
            });
            alert(res.data);
            if (res.data.includes("successful")) navigate('/login');
        } catch (err) {
            alert("Registration failed. Check if username is already taken.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/><br/>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br/><br/>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br/><br/>
                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default Register;