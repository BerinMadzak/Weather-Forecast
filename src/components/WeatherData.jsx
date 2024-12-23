import SevenDayForecast from "./SevenDayForecast";

export default function WeatherData({data, loading}) {
    if(loading) return <div className="loader"></div>;

    if(!data) return <p>Enter a location to display weather data!</p>;

    let date = new Date(data.date);
    return (
        <div>
            <h1 className="location">{data.address}</h1>
            <div className="general-display">
                <p>{data.conditions}</p>
                <p>{date.toDateString()}</p>
            </div>
            <div className="weather-data">
                <div className="weather-main">
                    <img src={`icons/${data.icon}.svg`} alt={data.icon} />
                    <div className="temp-display">
                        <p className="temp">{data.temp + " °C"}</p>
                        <p className="feels-like">Feels like: {data.feelsLike} °C</p>
                    </div>
                </div>
                <div className="other-display">
                    <p>Precipitation: {data.precipProb}%</p>
                    <p>Humidity: {data.humidity}%</p>
                    <p>Wind: {data.windSpeed} km/h</p>
                </div>
            </div>
            <p>{data.description}</p>
            <h2>7-Day Forecast</h2>
            <SevenDayForecast data={data.sevenDayForecast}/>
        </div>
    );
}