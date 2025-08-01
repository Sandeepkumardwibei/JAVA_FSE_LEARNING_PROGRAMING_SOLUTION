import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, Logged-in User!</h2>
      <FlightDetails />
      <button>Book Ticket</button>
    </div>
  );
};

export default UserPage;
