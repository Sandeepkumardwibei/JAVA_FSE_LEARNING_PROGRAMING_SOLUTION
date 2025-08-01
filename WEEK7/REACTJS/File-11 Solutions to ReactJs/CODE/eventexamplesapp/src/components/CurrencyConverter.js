import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount in INR.");
      return;
    }

    // Conversion logic: INR to Euro (example rate)
    const euro = parseFloat(amount) * 0.08; // 1 EUR = ~80 INR → 1 INR = 0.0125
    const converted = euro.toFixed(2);
    setCurrency(`Euro`);

    // Show alert with the conversion value
    alert(`Converting to Euro. Amount is ${converted}`);
  };

  return (
    <div>
      <h2 style={{ color: 'green', fontWeight: 'bold' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        <br /><br />
        <label>
          Currency:
          <textarea
            value={currency}
            readOnly
            style={{ marginLeft: '10px' }}
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
