import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        setMessage(data.message);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="App">
      <h1>Welcome to Miles</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
