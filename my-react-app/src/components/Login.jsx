import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Image7 from './Image7.jpg';
import { FcGoogle } from "react-icons/fc";


import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Firebase.jsx'; 

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have filled the form!');
    navigate('/home');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      navigate('/home'); // redirect after successful login
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className='wrapper'>
      <div className='form-box'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "black" }}>Login</h1>

          <div className="input-box">
            <input type='text' placeholder='Username' required style={{ color: 'black',background:"Transparent" }} />
          </div>

          <div className="input-box">
            <input type='password' placeholder='Password' required style={{ color: 'black',background:'Transparent' }} />
          </div>

          <div className="remember-forget">
            <label style={{ color: 'black' }}>
              <input type='checkbox' /> Remember Me
            </label>
            <a href='#'>Forgot Password</a>
          </div>

          <button type="submit" style={{background:'Transparent',color:'black', border:'1px solid black'}}>LogIn</button>

          <div style={{ marginTop: "10px",background:'Transparent' }}>
            <button type="button" onClick={handleGoogleLogin}>
              
              <div style={{ fontSize: '4vh' }}>
              <FcGoogle />
</div>
            </button>
          </div>
        </form>
      </div>

      <div className='right'>
        <img src={Image7} alt='Image7' />
      </div>
    </div>
  );
};

export default LoginPage;
