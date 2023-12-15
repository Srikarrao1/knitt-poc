import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [mnemonics,setMnemonics]=useState('')
const [btcAmount,setBtcAmount]=useState(5)


  return (
    <div className="App">
      <div className="App-header">
        <div className='form-container'>
          <label>Mnemonics</label>
          <textarea value={mnemonics} rows={6}  placeholder="Enter Mnemonics here" className='input-box-area' />
          <p>Btc Address: 0xdgshfdsgfdgfgdfsg </p>

          <p>Btc Balance: 100BTC </p>
          <label>Amount</label>

          <input value={btcAmount} placeholder="Enter BTC amount" className='input-box'></input>
          <p>Eth Address: 0xdgshfdsgfdgfgdfsg</p>
          <p>Eth Balance: 100ETH </p>

          <p>You will get 2.0 wBTC</p>
          <button className="swap-button">Swap</button>
        </div>
      </div>
    </div>
  );
}

export default App;
