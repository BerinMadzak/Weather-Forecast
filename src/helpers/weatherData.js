export async function getWeatherData(location, setLoading) {
    if(location === '') return;
    try {
        setLoading(true);
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next6days?unitGroup=metric&key=ARBPLGYL42FBD25ZVRQWC289P&contentType=json`);
        let data = await response.json();
        console.log(data);
        setLoading(false);
        return processData(data);
    }
    catch(e) {
        console.log(e);
    }
}

function processData(data) {
    let sevenDayData = processSevenDayData(data.days);
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
        sevenDayForecast: sevenDayData
    };
}

function processSevenDayData(dayArray) {
    let arr = [];
    for(let i = 0; i < dayArray.length; i++) {
        arr.push(processDayData(dayArray[i]));
    }
    return arr;
}

function processDayData(data) {
    return {
        date: data.datetime,
        tempMin: data.tempmin,
        tempMax: data.tempmax,
        icon: data.icon
    };
}
