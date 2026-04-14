import { useState, useEffect } from 'react';
import './App.css';
import { StartUp } from './text';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  // Changed to listen for 'Enter'
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (!hasStarted && e.key === 'Enter') {
        setHasStarted(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [hasStarted]);

  const handleCommand = (e) => {
    // Only run if they press Enter
    if (e.key === 'Enter') {
      const newLog = `guest@yourname:~$ ${inputValue}`;
      setHistory([...history, newLog]);
      setInputValue("");
    }
  };

  return (
    <div className="terminal-window">
      {/* 1. The StartUp banner is ALWAYS visible now */}
      <StartUp />

      {/* 2. The && means "If hasStarted is true, render what comes after" */}
      {hasStarted && (
        <div className="terminal-main">
          
          {history.map((line, index) => (
            <p key={index} style={{ margin: '5px 0' }}>{line}</p>
          ))}

          <div className="input-line">
            <span className="prompt">guest@yourname:~$</span>
            <input
              type="text"
              className="invisible-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus 
            />
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;