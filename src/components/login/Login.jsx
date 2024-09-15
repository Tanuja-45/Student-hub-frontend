import React, { useState } from 'react';
import './Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1>Welcome to</h1>
      <img
        src="https://images-platform.99static.com/0AbsNnQlTwX4EZVub25_1aC3K88=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/96/96134/attachment_96134165"
        alt="Student Hub Logo"
        className="logo  "
      />
     
      <form className=' mt-4 'onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
