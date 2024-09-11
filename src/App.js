import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [serverTime, setServerTime] = useState('');
  const [error, setError] = useState(null);

  const formatServerTime = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
      timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  const fetchServerTime = async () => {
    try {
      const response = await fetch('http://10.0.0.189:3000/time'); // Local IP address
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const formattedTime = formatServerTime(data.time);
      setServerTime(formattedTime);
    } catch (error) {
      console.error('Error fetching server time:', error);
      setServerTime('Error fetching time');
    }
  };

  useEffect(() => {
    fetchServerTime();
    const intervalId = setInterval(fetchServerTime, 5000); // Refresh it every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Server Time</h1>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>{serverTime ? `Current Server Time: ${serverTime}` : 'Loading...'}</p>
        )}
      </header>
    </div>
  );
}

export default App;
