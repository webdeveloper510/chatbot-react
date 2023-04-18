import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API } from '../../config/Api';
import axios from 'axios';

import Google from '../../assets/google.svg';
import Outlook from '../../assets/outlook.svg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post(API.BASE_URL + 'login/', {
            email: email,
            password: password,
        })
        .then(function (response) {
            console.log("LOGIN", response)
            toast.success("Logged in Successfully!");
            navigate('/dashboard')
        })
        .catch(function (error) {
            console.log(error);
        })
    }
  return (
    <div className='login auth'>
        <Container>
            <div className="auth-container">
            <h3 className='mb-4'>Sign In</h3>
            <form>
                <div className="input-container">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="input-container">
                    <label htmlFor="">Password</label>
                    <input type="password"  placeholder='Enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <div className="input-buttons d-flex flex-column align-items-center mt-2">
                    <button type='button' onClick={(e) => {handleLogin(e)}} className='button button-fill mb-2'>Sign In</button>
                    <span className='mx-md-4'>or</span>
                    <Link to='/signup'>Sign up</Link>
                </div>
                <span className='mt-4 line'></span>
                <div className="buttons w-100 mt-4">
                    <button className='button'><img src={Google} alt='google' /> Sign in with Google</button>
                    <button className='button'><img src={Outlook} alt='outlook' /> Sign in with Outlook</button>
                </div>
            </form>
            </div>
        </Container>
    </div>
  )
}

export default Login