import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Register = (props) => {
  const { t } = useTranslation();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      username,
    };
  
    try {
      await axios.post('http://localhost:8080/users', user);
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className='auth-form-container'>
    <h2>{t('register')}</h2>
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">{t('firstName')}</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
      />

      <label htmlFor="lastName">{t('lastName')}</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <label htmlFor="email">{t('email')}</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="username">{t('username')}:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">{t('password')}:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label htmlFor="repeatPassword">{t('repeatPassword')}</label>
      <input
        type="password"
        id="repeatPassword"
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
      />

      <button type="submit">{t('register')}</button>

      <button className='link-btn' type="button" onClick={() => props.onFormSwitch('login')}>{t('existingAcc')}</button>
    </form>
    </div>
  );
};

export default Register;
