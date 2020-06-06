import React from 'react';
import './App.css';
import Header from './components/header';
import GetWeather from './components/getWeather';
import WeatherDisplay from "./components/weatherDisplay"

function App() {
  return (
    <div className="App">
      <Header />
      <GetWeather />
      <WeatherDisplay />
    </div>
  );
}

export default App;
