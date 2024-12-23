import DayForecast from "./DayForecast";

export default function SevenDayForecast({data}) {
    return (
        <div className="seven-day">
            {data && data.map(day => <DayForecast key={day.date} data={day} />)}
        </div>
    );
}