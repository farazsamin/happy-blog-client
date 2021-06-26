import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isUser, setIsUser] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/isUser', {
                email: email,
                password: password
            })
            if (response.data.user !== null) {
                history.push('/home')
            }
        } catch (err) {
            console.log(err.response.data.err)
            setError(err.response.data.err)
        }
    }
    return (
        <div className="text-center mt-5">
            <h4>Login to your account</h4>
            <input className="m-2" type="email" name="" id="" placeholder="Email" onChange={
                (event) => {
                    setEmail(event.target.value);
                }
            } />
            <br />
            <input className="m-2" type="password" name="" id="" placeholder="Password" onChange={
                (event) => {
                    setPassword(event.target.value);
                }
            } />
            <br />
            <button onClick={handleLogin} className="btn btn-primary m-2">Login</button>
            <br />
            <p style={{ color: 'Red' }}>{error}</p>
        </div>
    );
};

export default Login;