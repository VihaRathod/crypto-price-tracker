import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketSimulator } from './utils/websocketSimulator';
import { updateAssetPrice } from './features/crypto/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import WebSocketWrapper from './components/WebSocketWrapper';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Price Tracker</h1>
      </header>
      <main>
      <WebSocketWrapper />
        <CryptoTable />
      </main>
      <footer>
        <p>Data updates every 1-2 seconds (simulated WebSocket)</p>
      </footer>
    </div>
  );
}

export default App;


