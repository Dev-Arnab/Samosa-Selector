import "./App.css";
import {useState} from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updataCount = () => setCount(count + multiplier);

  const buy_double_stuffed = () => {
    if (count >= 10){
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buy_party_pack = () => {
    if (count >= 50){
      setMultiplier(multiplier * 5);
      setCount(count - 50);
    }
  }
  const buy_full_feast = () => {
    if (count >= 100){
      setMultiplier(multiplier * 10)
      setCount(count - 100);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="Designer-removebg-preview.png" onClick={updataCount}></img>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 🤖</h3>
          <p>2x per click</p>
          <button onClick={buy_double_stuffed} >10 Samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buy_party_pack}>100 Samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast👩‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buy_full_feast}>1000 Samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App;