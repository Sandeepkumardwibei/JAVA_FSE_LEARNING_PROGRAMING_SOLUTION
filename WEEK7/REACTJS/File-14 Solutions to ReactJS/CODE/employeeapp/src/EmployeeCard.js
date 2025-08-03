import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard() {
  const theme = useContext(ThemeContext); // Get theme from context

  return (
    <div>
      <h3>Employee: John Doe</h3>
      <button className={theme}>
        Button with {theme} theme
      </button>
    </div>
  );
}

export default EmployeeCard;
