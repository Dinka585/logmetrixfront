import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

const Login = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, password };

    try {
      const response = await fetch('http://localhost:8080/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem('token', token);
        console.log('Login successful');

        if (jwt(token).auth === "ROLE_ADMIN") {
          navigate('/admin');
        } else {
          navigate('/home');
        }
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Error occurred while logging in:', error);
    }
  };


  return (
    <div className='auth-form-container'>
      <h2>{t('login')}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">{t('username')}</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">{t('password')}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">{t('login')}</button>

        <button className='link-btn' type="button" onClick={() => props.onFormSwitch('register')}>{t('noAcc')}</button>
      </form>
    </div>
  );
};

export default Login;
