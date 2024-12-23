export default function WeatherData({data}) {
    if(!data) return <p>Enter a location to display weather data!</p>;
    return (
        <div>
            <h1>{data.address}</h1>
            <p>{data.description}</p>
            <img src={`icons/${data.icon}.png`} alt={data.icon} />
            <p>{data.temp + " °C"}</p>
        </div>
    );
}