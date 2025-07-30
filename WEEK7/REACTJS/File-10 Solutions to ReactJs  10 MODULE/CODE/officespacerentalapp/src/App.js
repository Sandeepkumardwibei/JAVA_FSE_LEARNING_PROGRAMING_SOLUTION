import React from 'react';
import './App.css';
import officeImage from './Office.jpg'; // 👈 Local image

function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green",
    fontWeight: "bold"
  };

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>
      <img src={officeImage} alt="Office" style={{ width: "300px", height: "auto" }} />
      <h2>Name: {office.name}</h2>
      <p style={rentStyle}>Rent: Rs. {office.rent}</p>
      <p><strong>Address:</strong> {office.address}</p>
    </div>
  );
}

export default App;
