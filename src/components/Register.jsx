import React, { useState } from 'react';

const Register = (props) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Registration logic 
  };

  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
    <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />

      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <label htmlFor="lastName">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label htmlFor="repeatPassword">Repeat password:</label>
      <input
        type="password"
        id="repeatPassword"
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
      />

      <button type="submit">Register</button>

      <button className='link-btn' type="button" onClick={() => props.onFormSwitch('login')}>Already have an account?  Log in</button>
    </form>
    </div>
  );
};

export default Register;
