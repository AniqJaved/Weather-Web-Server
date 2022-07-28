const requests = require("requests");

const geocode = (address, callback) =>{
    const url = `https://atlas.microsoft.com/search/address/json?&subscription-key=cFQSVSSEiWClALnzb-T4v_dXkTwQAIAKwCBlNxWW4jg&api-version=1.0&language=en-US&query=${address}`;
    requests(url)
    .on('data', function (chunk) {
        const objData = JSON.parse(chunk);
            const hasError = objData.error; 
            if(typeof hasError !== 'undefined'){ 
                callback("Network issue found",undefined); 
            } 
            else if(objData.results.length == 0){ 
                callback("Unable to find location",undefined); 
            } 
            else{ 
                callback(undefined,{ 
                    latitude: objData.results[0].position.lat, 
                    longitude: objData.results[0].position.lon, 
                    location: objData.results[0].address.freeformAddress 
                }); 
            }
        
    })
    .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
      });
}

module.exports = geocode;