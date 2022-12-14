import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerCard from './Components/PlayerProfilePage/PlayerCard';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <BrowserRouter basename="/leaderboard-challenge/">
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="profile" element={<PlayerCard />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
