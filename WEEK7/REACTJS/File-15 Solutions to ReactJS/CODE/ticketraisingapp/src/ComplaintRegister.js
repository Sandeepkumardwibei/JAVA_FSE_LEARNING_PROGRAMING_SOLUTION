// src/ComplaintRegister.js
import React, { useState } from 'react';
import './App.css';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionId = Math.floor(Math.random() * 100);
    alert(`Thanks ${employeeName}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`);
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div className="container">
      <h2 className="heading">Register your complaints here!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        /><br /><br />
        <label>Complaint: </label>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
