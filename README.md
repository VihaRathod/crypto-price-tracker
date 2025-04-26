<<<<<<< HEAD

# Crypto Price Tracker

A real-time crypto price simulator built using React, Redux Toolkit, and a simulated WebSocket connection.  
Track live updates of cryptocurrency prices with beautiful charts and responsive tables.

---

## Demo

[Watch full video demo](https://drive.google.com/file/d/1823kK1khgUMutz4oR-9xAeAYcPPeBuvy/view?usp=drive_link)

---

## Tech Stack

- React
- Redux Toolkit
- Simulated WebSocket (setInterval)
- Vite / Create React App (adjust based on what you used)
- CSS Modules

---

## Project Structure & Architecture

```bash
src/
├── app/
│   └── store.js             # Redux store setup
├── components/
│   ├── CryptoRow.jsx         # Single crypto asset row
│   ├── CryptoRow.css         # Styles for CryptoRow
│   ├── CryptoTable.jsx       # Table to display all assets
│   ├── CryptoTable.css       # Styles for CryptoTable
│   ├── MiniChart.jsx         # Small trend chart for each crypto
│   ├── MiniChart.css         # Styles for MiniChart
│   └── WebSocketWrapper.jsx  # Handles simulated WebSocket updates
├── data/
│   └── cryptoData.js         # Static crypto data
├── features/
│   └── crypto/
│       └── cryptoSlice.js    # Redux slice for crypto assets
├── utils/
│   ├── formatters.js         # Utility functions (format prices, volumes)
│   └── websocketSimulator.js # Class for simulating WebSocket updates
├── App.jsx                   # Main app structure
├── App.css                   # Main app styles
├── index.jsx                 # App entry point
└── index.css                 # Global styles
```

## Setup Instructions

git clone https://github.com/VihaRathod/crypto-price-tracker.git
cd crypto-price-tracker
npm install
npm run dev

## Features

Real-time simulated price updates every 1-2 seconds
Mini charts showing recent price trends
Dynamic price and volume changes
Responsive and stylish crypto table layout
Built with Redux Toolkit and React best practices

=======

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

> > > > > > > e760d71 (Initial commit)
