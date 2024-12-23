export async function getWeatherData(location) {
    if(location === '') return;
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?key=ARBPLGYL42FBD25ZVRQWC289P&contentType=json`);
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
        time: data.currentConditions.datetime,
        conditions: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        windSpeed: data.currentConditions.windspeed,
        windDir: data.currentConditions.winddir,
        icon: data.currentConditions.icon,
    };
}
