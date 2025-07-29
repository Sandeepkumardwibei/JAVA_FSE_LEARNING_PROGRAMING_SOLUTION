// src/CountPeople.js
import React from 'react';
import './App.css';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div className="main-container">
        <div className="box">
          <button className="btn green" onClick={this.UpdateEntry}>Login</button>
          <span className="label green">{this.state.entrycount} People Entered!!!</span>
        </div>

        <div className="box">
          <button className="btn green" onClick={this.UpdateExit}>Exit</button>
          <span className="label green">{this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
