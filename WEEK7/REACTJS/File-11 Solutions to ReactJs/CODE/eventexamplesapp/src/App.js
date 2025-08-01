import React from 'react';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <Counter />
      <CurrencyConverter />
    </div>
  );
}

export default App;
