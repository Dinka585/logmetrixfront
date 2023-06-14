import React, { useState } from 'react';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const user={username, password}
    console.log(user)
  
  };

  return (
    <div className='auth-form-container'>
    <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit">Login</button>

      <button className='link-btn' type="button" onClick={() => props.onFormSwitch('register')}>Don't have an account yet?  Register</button>
    </form>
    </div>
  );
};

export default Login;
