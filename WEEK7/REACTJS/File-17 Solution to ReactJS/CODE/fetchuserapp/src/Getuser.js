// src/Getuser.js
import React, { Component } from 'react';
import './App.css';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      this.setState({ user: data.results[0] });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div className="user-container">
        {user ? (
          <>
            <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
            <img src={user.picture.large} alt="User" className="profile-pic" />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Getuser;
