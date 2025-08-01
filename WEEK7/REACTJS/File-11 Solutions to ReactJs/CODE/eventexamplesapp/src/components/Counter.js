import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Called by the Increment button
  const increment = () => {
    setCount(prevCount => prevCount + 1);   // a. Increase the value
    sayHello();                              // b. Say Hello
    showStaticMessage();                     // c. Show static message
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const showStaticMessage = () => {
    console.log("This is a static message after increment.");
  };

  const sayWelcome = () => {
    alert("welcome");
  };

  const handleSyntheticClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={sayWelcome}>Say welcome</button>
      <br /><br />

      <button onClick={handleSyntheticClick}>Click on me</button>
    </div>
  );
}

export default Counter;
