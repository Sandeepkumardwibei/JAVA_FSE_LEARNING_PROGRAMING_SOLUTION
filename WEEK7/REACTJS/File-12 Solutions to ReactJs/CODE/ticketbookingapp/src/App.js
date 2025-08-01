import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event Handlers
  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  // Element variables
  let message;
  let button;

  if (isLoggedIn) {
    message = <h1>Welcome back</h1>;
    button = <button onClick={handleLogoutClick}>Logout</button>;
  } else {
    message = <h1>Please sign up.</h1>;
    button = <button onClick={handleLoginClick}>Login</button>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {message}
      <br />
      {button}
    </div>
  );
}

export default App;
