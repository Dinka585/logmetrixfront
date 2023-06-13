import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login = (props) => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Login successful');
    } else {
      // Failed login
      console.log('Invalid username or password');
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
