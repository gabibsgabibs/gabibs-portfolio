import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/Context';

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode: () => setIsDark(!isDark) }}
    >
      <div className={`${isDark ? "dark" : ""} w-full h-screen min-h-screen`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
