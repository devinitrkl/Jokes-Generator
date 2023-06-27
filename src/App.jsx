import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      {joke ? (
        <p>{joke}</p>
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
}

export default App;