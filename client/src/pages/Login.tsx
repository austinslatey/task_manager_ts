import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>

  )
};

export default Login;
