import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import { getWeatherData } from './helpers/weatherData';
import WeatherData from './components/WeatherData';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState('wait');

  async function loadData(event) {
    event.preventDefault();
    const location = event.target.elements[0].value;
    
    const weatherData = await getWeatherData(location, setLoading);
    setData(weatherData);
  }

  return (
    <>
      <Search loadData={loadData} />
      <WeatherData data={data} loading={loading} />
    </>
  )
}

export default App;
