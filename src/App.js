import React, { useState, useEffect  } from 'react';
import './App.css';
import axios from "axios";


function App() {
  const [previous, setPrevious] = useState(0.0);
  const [current, setCurrent] = useState(0.0);
  
  const fetchCurrencyValue = async () => {
    const response = await axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/buy", 
      { withCredentials: false })
      .catch((err) => {
        console.log("Not properly authenticated");
      });

    if (response && response.data) {
      console.log("Response: ", response.data);
      console.log("Amount: ", response.data.data.amount);
      setPrevious(current);
      setCurrent(parseFloat(response.data.data.amount));
    }
  };

  useEffect(() => {
  
  });

  return (
    <div>
      <p>The previous value is {previous}</p>
      <p>The current value is {current}</p>
      <p>The difference is {(current - previous).toFixed(2)}</p>
      <button onClick={() => fetchCurrencyValue()}>
        Call USD currency value
      </button>
    </div>
  );
}

export default App;
