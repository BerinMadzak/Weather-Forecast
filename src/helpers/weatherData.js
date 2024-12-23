export async function getWeatherData(location) {
    if(location === '') return;
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=metric&key=ARBPLGYL42FBD25ZVRQWC289P&contentType=json`);
        let data = await response.json();
        console.log(data);
        return processData(data);
    }
    catch(e) {
        console.log(e);
    }
}

function processData(data) {
    return {
        address: data.resolvedAddress,
        description: data.description,
        date: data.days[0].datetime,
        conditions: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        windSpeed: data.currentConditions.windspeed,
        precipProb: data.currentConditions.precipprob,
        icon: data.currentConditions.icon,
    };
}
