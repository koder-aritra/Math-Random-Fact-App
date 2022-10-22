import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");


  const fetchFact = () => {
    const options = {
      method: 'GET',
      url: 'https://numbersapi.p.rapidapi.com/random/trivia',
      params: { fragment: 'true', json: 'true' },
      headers: {
        'X-RapidAPI-Key': '4e7afd525dmsh0e23e5018ea410fp18fcb8jsn75502cdd7df3',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data.text);
      console.log(response.data.number);
      setNumber(response.data.number);
      setText(response.data.text);
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{number} {text}</h1>
        <button className="button" onClick={fetchFact}>
          <span>NEXT FACT PLEASE!</span>
        </button>
      </div>
    </div>
  )
}

export default App