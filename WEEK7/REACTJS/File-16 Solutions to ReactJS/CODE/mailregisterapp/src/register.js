// src/register.js
import React, { useState } from 'react';
import './App.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 5) {
      alert("Name must be at least 5 characters");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert("Email is not valid!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Register Here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
