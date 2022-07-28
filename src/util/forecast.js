const requests = require("requests");

const forecast = (lat,lon,callback) =>{
    requests(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac89e54ccaad3fe59b93d8aa673ec717&units=metric`)
    .on('data',  (chunk) => {
        const objData = JSON.parse(chunk);
        console.log(objData.current);
        const hasError = objData.error;
        if(typeof hasError !== 'undefined'){
            callback("Network issue found",undefined);
        }
        else if(objData.current.weather == "undefined"){
            callback("Unable to find location",undefined);
        }
        else{
            callback(undefined,objData.current.weather[0].description + ". " +"Current temparture is " + objData.current.temp + " . Feels like " + objData.current.feels_like + ". Wind is reported at speed of " + objData.current.wind_speed + ". Humidity in air is " + objData.current.humidity );
        }
    })
    .on('end',  (err) => {
        if (err) return console.log('connection closed due to errors', err);
    });
}

module.exports = forecast;