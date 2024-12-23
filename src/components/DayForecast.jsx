export default function DayForecast({data}) {
    const date = new Date(data.date);
    return (
        <div className="day-forecast">
            <p>{date.toDateString().substring(0, 3)}</p>
            <img src={`icons/${data.icon}.svg`} alt={data.icon} />
            <div className="simple-flex">
                <p>{data.tempMax + " °C"}</p>
                <p>{data.tempMin + " °C"}</p>
            </div>
        </div>
    );
}