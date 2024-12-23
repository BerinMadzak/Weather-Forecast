import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { getWeatherData } from './helpers/weatherData';
import WeatherData from './components/WeatherData';

function App() {
  const [data, setData] = useState('');

  async function loadData(event) {
    event.preventDefault();
    const location = event.target.elements[0].value;
    
    const weatherData = await getWeatherData(location);
    setData(weatherData);
    console.log(weatherData);
  }

  return (
    <>
      <Search loadData={loadData} />
      <WeatherData data={data}></WeatherData>
    </>
  )
}

export default App;
