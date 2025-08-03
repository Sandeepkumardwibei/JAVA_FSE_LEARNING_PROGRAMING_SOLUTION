import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';

function App() {
  const [theme, setTheme] = useState('light'); // state holds the current theme

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Employee App</h1>
        {/* Toggle theme button (optional) */}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>

        {/* Theme no longer passed as a prop */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
