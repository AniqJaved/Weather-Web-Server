const requests = require("requests");

const forecast = (lat,lon,callback) =>{
    requests(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac89e54ccaad3fe59b93d8aa673ec717&units=metric`)
    .on('data',  (chunk) => {
        const objData = JSON.parse(chunk);
        const hasError = objData.error;
        if(typeof hasError !== 'undefined'){
            callback("Network issue found",undefined);
        }
        else if(objData.current.weather == "undefined"){
            callback("Unable to find location",undefined);
        }
        else{
            callback(undefined,objData.current.weather[0].description);
        }
    })
    .on('end',  (err) => {
        if (err) return console.log('connection closed due to errors', err);
    });
}

module.exports = forecast;