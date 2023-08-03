import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.scss';

function Login() {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post('/api/auth/login', {
        email,
        password,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          Email :
          <input name="email" type="email" placeholder="Email" required />
        </label>
        <br />
        <label htmlFor="password">
          Passwords :
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
